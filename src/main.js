import path from 'path';

import * as navigation from './modules/navigation.js';
import * as filesystem from './modules/filesystem.js';

const execCommand = async (command) => {
    const commandName = parseCommand(command)[0];
    const commandArgs = parseCommand(command).slice(1);

    //try {
    switch (commandName) {
        case '.exit':
            navigation.exit();
            break;
        case 'up':
            navigation.goDirUp();
            break;
        case 'cd':
            const newPath = buildPath(commandArgs[0]);
            navigation.changeDir(newPath);
            break;
        case 'ls':
            navigation.listDir();
            break;
        case 'cat':
            const readPath = buildPath(commandArgs.join(' '));
            filesystem.readFile(readPath);
            break;
        case 'add':
            const createPath = buildPath(commandArgs[0]);
            const dataToWrite = commandArgs.slice(1).join(' ');
            filesystem.createFile(createPath, dataToWrite);
            break;
        case 'rm':
            const deletePath = buildPath(commandArgs[0]);
            filesystem.deleteFile(deletePath);
            break;
        default:
            console.log('Invalid command');
            break;
    }
    //}
    //catch {
    //console.log('Operation failed');
    //}
}

const parseCommand = (command) => command.toString().replace("\r\n", '').split(' ');

export const buildPath = (inputPath) => {
    const normalizedPath = path.normalize(inputPath);

    if (path.isAbsolute(normalizedPath)) {
        return normalizedPath;
    }
    else {
        const absolutePath = path.join(process.cwd(), normalizedPath);
        return absolutePath;
    }
}

process.stdin.on('data', (data) => execCommand(data));

navigation.setCwdToHomedir();
navigation.printCwd();
process.stdin.resume();