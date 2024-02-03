import path from 'path';
import { homedir } from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __homedir = homedir();
var __workdir = process.cwd();

const CONSOLE_FUNC = ['.exit'];

const execCommand = async (command) => {
    const commandName = parseCommand(command)[0];
    const commandArg = parseCommand(command).slice(1);

    const category = getCategory(commandName);
    if (!category) {
        console.log('< Invalid input');
        return;
    }

    await import(`file://${__dirname}/modules/${category}/${commandName}.js?args=${commandArg}`);
}

const parseCommand = (command) => command.split(' ');

const getCategory = (commandName) => {
    switch (true) {
        case (checkIfInCategory(CONSOLE_FUNC, commandName)):
            return 'console';
        default:
            return null;
    }
}

const checkIfInCategory = (category, commandName) => category.some(() => commandName);


process.stdin.on('data', (data) => execCommand(data.toString()));

process.stdin.resume();