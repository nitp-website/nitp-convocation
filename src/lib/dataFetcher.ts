import fs from 'fs';
import path from 'path';

export function getConvocationData(year: string) {
  const dataDir = path.join(process.cwd(), 'data', year);
  
  if (!fs.existsSync(dataDir)) {
    console.error(`[Data Fetcher] Data directory for year ${year} does not exist: ${dataDir}`);
    return null;
  }
  
  try {
    const info = JSON.parse(fs.readFileSync(path.join(dataDir, 'info.json'), 'utf8'));
    const dignitaries = JSON.parse(fs.readFileSync(path.join(dataDir, 'dignitaries.json'), 'utf8'));
    const medals = JSON.parse(fs.readFileSync(path.join(dataDir, 'medals.json'), 'utf8'));
    const committees = JSON.parse(fs.readFileSync(path.join(dataDir, 'committees.json'), 'utf8'));
    const graduates = JSON.parse(fs.readFileSync(path.join(dataDir, 'graduates.json'), 'utf8'));

    return { info, dignitaries, medals, committees, graduates };
  } catch (error: any) {
    console.error(`[Data Fetcher] Error parsing JSON for year ${year}: ${error.message}`);
    return null;
  }
}
