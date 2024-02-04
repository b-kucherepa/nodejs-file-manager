import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

export const calcFileHash = (filePath) => {
    const fileData = readFile(filePath);

    const hashData = createHash('sha256');
    hashData.update('fileData');
    console.log(hashData.digest('hex'));
}
