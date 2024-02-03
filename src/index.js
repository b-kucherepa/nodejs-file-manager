const ARG_PREFIX = '--';
const ARG_USERNAME = 'username';

const getArg = (argName) => {
    const argsArray = Array.from(process.argv);
    const argString = argsArray.find((s) => s.includes(argName));
    return argString ? argString.replace(ARG_PREFIX + argName + '=', '') : `<${argName}>`;
}

const printStartMes = (username) => console.log(`< Welcome to File Manager, ${username}!`)

const printExitMes = (username) => console.log(`< Thank you for using File Manager, ${username}, goodbye!`);

process.on('exit', (e) => {
    printExitMes(username);
});

const username = getArg(ARG_USERNAME);
printStartMes(username);

await import('./main.js');