<<<<<<< HEAD
import path from 'path';

import * as navigation from './modules/navigation.js';
import * as filesystem from './modules/filesystem.js';
=======
import * as navigation from './modules/navigation.js';
>>>>>>> 94eaddafe868281925e2de33964d9fead69e57ac

const execCommand = async (command) => {
    const commandName = parseCommand(command)[0];
    const commandArgs = parseCommand(command).slice(1);

<<<<<<< HEAD
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
                const readPath = buildPath(commandArgs[0]);
                filesystem.readFile(readPath);
                break;
            default:
                console.log('Invalid command');
                break;
        }
    //}
    //catch {
        console.log('Operation failed');
    //}
}

const parseCommand = (command) => command.toString().replace("\r\n", '').split(' ');

export const buildPath = (inputPath) => {
    const normalizedPath = path.normalize(inputPath);

    if (path.isAbsolute(normalizedPath)) {
        return normalizedPath;
    }
    else {
        const absolutePath=path.join(process.cwd(), normalizedPath);
        return absolutePath;
    }
}

=======
    switch (commandName) {
        case '.exit':
            navigation.exit();
            break;
        case 'up':
            navigation.goDirUp();
            break;
        case 'cd':
            navigation.changeDir(commandArgs[0]);
            break;
        case 'ls':
            navigation.listDir();
            break;
        default:
            console.log('Invalid command');
            break;
    }
}

const parseCommand = (command) => command.toString().replace("\r\n", '').split(' ');

>>>>>>> 94eaddafe868281925e2de33964d9fead69e57ac
process.stdin.on('data', (data) => execCommand(data));

navigation.setCwdToHomedir();
navigation.printCwd();
process.stdin.resume();