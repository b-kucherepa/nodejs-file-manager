import { unlink, writeFile } from 'fs/promises';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

export const readFile = async (filePath) => {
    const rs = createReadStream(filePath);
    await pipeline(rs, process.stdout);
};

export const createFile = async (filePath, data) => await writeFile(filePath, data, { flag: 'wx' });

export const deleteFile = async (filePath) => await unlink(filePath);
