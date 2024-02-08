const ARG_PREFIX = '--';
const ARG_USERNAME = 'username';

const getArg = (argName) => {
    const argsArray = Array.from(process.argv);
    const argString = argsArray.find((s) => s.includes(argName));
    return argString ? argString.replace(ARG_PREFIX + argName + '=', '') : `<${argName}>`;
}

const printStartMessage = (username) => console.log(`< Welcome to File Manager, ${username}!`)

const printExitMessage = (username) => console.log(`< Thank you for using File Manager, ${username}, goodbye!`);

process.on('exit', (e) => {
    printExitMessage(username);
});

const username = getArg(ARG_USERNAME);
printStartMessage(username);
await import('./main.js');