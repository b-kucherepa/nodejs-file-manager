import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';

export const brotliCompress = async (sourcePath, destPath) => {
    const rs = createReadStream(sourcePath);
    const ws = createWriteStream(destPath, { flag: 'wx' });
    await pipeline(rs, createBrotliCompress(), ws);
}

export const brotliDecompress = async (sourcePath, destPath) => {
    const rs = createReadStream(sourcePath);
    const ws = createWriteStream(destPath, { flag: 'wx' });
    await pipeline(rs, createBrotliDecompress(), ws);
}