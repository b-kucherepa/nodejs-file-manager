import { readdir } from 'fs/promises';
import { homedir } from 'os';

export const exit = (args) => process.exit();

export const goDirUp = () => process.chdir('..');

export const changeDir = (newPath) => process.chdir(newPath);

export const setCwdToHomedir = () => process.chdir(homedir());

export const printCwd = () => console.log(`< You are currently in ${process.cwd()}`);

export const listDir = async () => {
    const files = await readdir(process.cwd(), { withFileTypes: true });
    const sortedFiles = sortFiles(files);
    console.table(sortedFiles);
}

const sortFiles = (files) => {
    let dirArray = [];
    let fileArray = [];

    files.forEach((element) => {
        if (element.isDirectory()) {
            dirArray.push({ Name: element.name, Type: 'directory' });
        }
        else {
            fileArray.push({ Name: element.name, Type: 'file' });
        }
    });
    
    return dirArray.concat(fileArray);
}
