import {readdir} from 'fs/promises';
import { homedir } from 'os';

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

export const exit = (args) => process.exit();

export const goDirUp = () => {
    process.chdir('..');
    printCwd();
}

export const changeDir = (newPath) => {
    process.chdir(newPath);
    printCwd();
}

export const setCwdToHomedir = () => process.chdir(homedir());

export const printCwd = () => console.log(`< You are currently in ${process.cwd()}`);

export const listDir = async () => {
    const files = await readdir(process.cwd(), {withFileTypes: true});
    const sortedFiles = sortFiles(files);
    console.table(sortedFiles);
}

const sortFiles= (files) => {
    const sortedFiles = files.sort((a, b) => a.isFile() - b.isFile()).filter((item) => !item.isSymbolicLink);
    console.log(files);
    console.log(sortedFiles);
    //const filesTable = 
}
