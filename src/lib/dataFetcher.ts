import fs from 'fs';
import path from 'path';

export interface ConvocationMetadata {
  year: string;
  edition: string;
  editionRoman: string;
  date: string;
  isCurrent?: boolean;
  externalLink?: string;
}

export function getAvailableConvocations(): ConvocationMetadata[] {
  return [
    {
      year: "2026",
      edition: "15th Annual Convocation",
      editionRoman: "XV Convocation",
      date: "Saturday, December 26, 2026",
      isCurrent: true,
    },
    {
      year: "2025",
      edition: "14th Annual Convocation",
      editionRoman: "XIV Convocation",
      date: "Saturday, December 27, 2025",
      isCurrent: false,
    },
    {
      year: "2024",
      edition: "13th Annual Convocation",
      editionRoman: "XIII Convocation",
      date: "Saturday, December 28, 2024",
      isCurrent: false,
    },
  ];
}

export async function getConvocationData(requestedYear?: string) {
  const defaultYear = "2026";
  const year = requestedYear || defaultYear;
  
  const baseDir = path.join(process.cwd(), 'data');
  const yearDir = path.join(baseDir, year);

  if (!fs.existsSync(baseDir)) {
    console.error(`[Data Fetcher] Data directory does not exist: ${baseDir}`);
    return null;
  }

  // If year directory doesn't exist and requestedYear was explicitly specified
  if (requestedYear && !fs.existsSync(yearDir)) {
    console.warn(`[Data Fetcher] No data directory found for year: ${requestedYear}`);
    return null;
  }

  const readJson = (filePath: string) => {
    try {
      if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
      }
      return null;
    } catch (e: any) {
      console.error(`[Data Fetcher] Error reading ${filePath}: ${e.message}`);
      return null;
    }
  };

  const info = readJson(path.join(yearDir, 'info.json')) || {};
  const dignitaries = readJson(path.join(yearDir, 'dignitaries.json')) || [];
  const medals = readJson(path.join(yearDir, 'medals.json')) || {
    UG_GOLD_MEDALISTS: [],
    PG_GOLD_MEDALISTS: [],
    BEST_GRADUATES: [],
    ENDOWMENT_AWARDS: []
  };
  const committees = readJson(path.join(yearDir, 'committees.json')) || {
    deans: [],
    committees: []
  };
  const gallery = readJson(path.join(yearDir, 'gallery.json')) || [];
  const graduates = readJson(path.join(yearDir, 'graduates.json')) || [];
  const localNotices = readJson(path.join(yearDir, 'notices.json')) || [];
  let notices = localNotices;

  // For the current convocation (2026), attempt to fetch live notices from official NITP admin API
  if (year === "2026") {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);
      const res = await fetch("https://admin.nitp.ac.in/api/notice?type=convocation", {
        signal: controller.signal,
        next: { revalidate: 60 }
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json();
        if (json && Array.isArray(json.data) && json.data.length > 0) {
          const liveNotices = json.data.map((item: any) => {
            let formattedDate = "";
            try {
              const ts = parseInt(item.openDate || item.timestamp);
              if (!isNaN(ts)) {
                formattedDate = new Date(ts).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                });
              }
            } catch {}

            return {
              id: String(item.id),
              title: item.title,
              date: formattedDate || "Recent",
              category: item.notice_sub_type || "Official Circular",
              isNew: Boolean(item.is_new ?? true),
              isUrgent: Boolean(item.important),
              summary: item.additional_title || item.title,
              fileUrl: item.attachments?.[0]?.url || item.notice_link || "#",
              isExternal: Boolean(item.notice_link && !item.attachments?.length),
              signedBy: item.email ? `Convocation Cell (${item.email})` : "Registrar & Convocation Secretariat",
              referenceNo: `NITP/CONV/${String(item.id).slice(-4)}`
            };
          });

          // Merge live notices with local notices avoiding duplicates
          const liveTitles = new Set(liveNotices.map((n: any) => n.title.toLowerCase().trim()));
          const filteredLocal = localNotices.filter(
            (ln: any) => !liveTitles.has(ln.title.toLowerCase().trim())
          );
          notices = [...liveNotices, ...filteredLocal];
        }
      }
    } catch (err) {
      console.warn("[Data Fetcher] Live notices fetch error (falling back to local):", (err as any)?.message);
    }
  }

  return {
    year,
    info,
    dignitaries,
    medals,
    committees,
    graduates,
    gallery,
    notices,
  };
}
