import {readdir} from 'fs/promises';
<<<<<<< HEAD
import { homedir } from 'os';

=======
import path from 'path';
import { homedir } from 'os';
import { fileURLToPath } from 'url';
>>>>>>> 94eaddafe868281925e2de33964d9fead69e57ac
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

export const exit = (args) => process.exit();

export const goDirUp = () => {
    process.chdir('..');
    printCwd();
}

export const changeDir = (newPath) => {
<<<<<<< HEAD
    process.chdir(newPath);
    printCwd();
}

export const setCwdToHomedir = () => process.chdir(homedir());

export const printCwd = () => console.log(`< You are currently in ${process.cwd()}`);

=======
    const normalizedNewPath = path.normalize(newPath);

    if (path.isAbsolute(normalizedNewPath)) {
        process.chdir(normalizedNewPath);
    }
    else {
        const absoluteNewPath=path.join(process.cwd(), normalizedNewPath);
        process.chdir(absoluteNewPath);
    }
    printCwd();
}

>>>>>>> 94eaddafe868281925e2de33964d9fead69e57ac
export const listDir = async () => {
    const files = await readdir(process.cwd(), {withFileTypes: true});
    const sortedFiles = sortFiles(files);
    console.table(sortedFiles);
}

<<<<<<< HEAD
=======
export const setCwdToHomedir = () => process.chdir(homedir());

export const printCwd = () => console.log(`< You are currently in ${process.cwd()}`);

>>>>>>> 94eaddafe868281925e2de33964d9fead69e57ac
const sortFiles= (files) => {
    const sortedFiles = files.sort((a, b) => a.isFile() - b.isFile()).filter((item) => !item.isSymbolicLink);
    console.log(files);
    console.log(sortedFiles);
    //const filesTable = 
}
<<<<<<< HEAD
=======

>>>>>>> 94eaddafe868281925e2de33964d9fead69e57ac
