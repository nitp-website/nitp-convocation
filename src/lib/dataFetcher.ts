import fs from 'fs';
import path from 'path';

export async function getConvocationData() {
  const dataDir = path.join(process.cwd(), 'data', 'data');
  const tempDir = path.join(process.cwd(), 'temp', '2025');
  
  if (!fs.existsSync(dataDir)) {
    console.error(`[Data Fetcher] Data directory does not exist: ${dataDir}`);
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

  const info = readJson(path.join(dataDir, 'info.json')) || {};
  const dignitaries = readJson(path.join(dataDir, 'dignitaries.json')) || [];
  const medals = readJson(path.join(dataDir, 'medals.json')) || { UG_GOLD_MEDALISTS: [], PG_GOLD_MEDALISTS: [], BEST_GRADUATES: [] };
  const committees = readJson(path.join(dataDir, 'committees.json')) || { deans: [], committees: [] };
  const gallery = readJson(path.join(dataDir, 'gallery.json')) || [];

  // Graduates fetched from temp endpoint for now
  const graduates = readJson(path.join(tempDir, 'graduates.json')) || { degree_recipients: [] };

  return { info, dignitaries, medals, committees, graduates, gallery };
}
