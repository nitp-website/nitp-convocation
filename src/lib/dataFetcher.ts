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
      year: "2025",
      edition: "14th Annual Convocation",
      editionRoman: "XIV Convocation",
      date: "Saturday, December 27, 2025",
      isCurrent: true,
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
  const defaultYear = "2025";
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

  return {
    year,
    info,
    dignitaries,
    medals,
    committees,
    graduates,
    gallery,
  };
}
