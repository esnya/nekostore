import * as fs from 'fs';
import { catchError } from './utilities';

async function runExample(file: string): Promise<void> {
  const { default: example } = await import(`./${file}`);
  await example;
  console.log('');
}

catchError(
  async (): Promise<void> => {
    const files = await fs.promises.readdir(__dirname);
    await files
      .filter(file => file.match(/[0-9]_[a-z]+\.ts$/))
      .reduce(async (promise, file) => {
        await promise;
        await runExample(file);
      }, Promise.resolve());
  },
).then(() => process.exit(0));
