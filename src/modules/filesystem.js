import { constants, rename, unlink, writeFile } from 'fs/promises';
import { access } from 'fs';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

export const readFile = async (filePath) => {
    const rs = createReadStream(filePath);
    await pipeline(rs, process.stdout);
};

export const createFile = async (filePath, data) => await writeFile(filePath, data, { flag: 'wx' });

export const deleteFile = async (filePath) => await unlink(filePath);

export const copyFile = async (sourcePath, destPath) => {
    const rs = createReadStream(sourcePath);
    const ws = createWriteStream(destPath, { flag: 'wx' });
    await pipeline(rs, ws);
}

export const moveFile = async (sourcePath, destPath) => {
    await copyFile(sourcePath, destPath);
    await deleteFile(sourcePath);
}

export const renameFile = async (sourcePath, destPath) => {
    await rename(sourcePath, destPath, constants.COPYFILE_EXCL);
}
