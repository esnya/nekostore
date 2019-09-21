import * as fs from 'fs';
import * as path from 'path';
import { catchError } from './utilities';

async function runExample(file: string): Promise<void> {
  const { default: example } = await import(`./${file}`);
  await example;
  console.log('');
}

catchError(
  async (): Promise<void> => {
    const files = await fs.promises.readdir(__dirname);
    const ext = path.extname(__filename);
    await files
      .filter(file => file.endsWith(ext))
      .reduce(async (promise, file) => {
        await promise;
        await runExample(file);
      }, Promise.resolve());
  },
).then(() => process.exit(0));
