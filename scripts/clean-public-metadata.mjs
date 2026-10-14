import {readdir, unlink} from 'node:fs/promises';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';

const publicDirectory = fileURLToPath(new URL('../public/', import.meta.url));

const removeFinderMetadata = async directory => {
  const entries = await readdir(directory, {withFileTypes: true});
  await Promise.all(entries.map(async entry => {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      await removeFinderMetadata(entryPath);
    } else if (entry.name === '.DS_Store') {
      await unlink(entryPath);
    }
  }));
};

await removeFinderMetadata(publicDirectory);
