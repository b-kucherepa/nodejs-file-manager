import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import {createBrotliCompress, createBrotliDecompress} from 'zlib';

export const brotliCompress = async (sourcePath, destPath) => {
    const rs = createReadStream(sourcePath);
    const ws = createWriteStream(destPath);
    await pipeline(rs, createBrotliCompress(), ws);
}

export const brotliDecompress = async (sourcePath, destPath) => {
    const rs = createReadStream(sourcePath);
    const ws = createWriteStream(destPath);
    await pipeline(rs, createBrotliDecompress(), ws);
}