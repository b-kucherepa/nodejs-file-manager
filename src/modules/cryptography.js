import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

export const calcFileHash = (filePath) => {
    const fileData = readFile(filePath);

    const hashData = createHash('sha256');
    hashData.update('fileData');
    console.log(hashData.digest('hex'));
}
