import { access, constants, copyFile as fscopyfile, rename, unlink, writeFile } from 'fs/promises';
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
    const ws = createWriteStream(destPath);
    await pipeline(rs, ws);
}

export const moveFile = async (sourcePath, destPath) => {
    await copyFile (sourcePath, destPath);
    await deleteFile (sourcePath);
}

export const renameFile = async (sourcePath, destPath) => {
    if (access(destPath, constants.F_OK)) {
        console.log('Operation failed. A file with the same name exists in the destination folder');
        return;
    }
    await rename(sourcePath, destPath, constants.COPYFILE_EXCL);
}