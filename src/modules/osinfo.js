import { EOL, cpus, homedir, userInfo, arch } from 'os';

export const printOsInfo = (arg) => {
    switch (arg) {
        case '--EOL':
            printEOL();
            break;
        case '--cpus':
            printCpus();
            break;
        case '--homedir':
            printHomedir();
            break;
        case '--username':
            printOsUsername();
            break;
        case '--architecture':
            printArchitecture();
    }
}

const printEOL = () => console.log(JSON.stringify(EOL));

const printCpus = () => console.table(cpus());

const printHomedir = () => console.table(homedir());

const printOsUsername = () => console.log(userInfo().username);

const printArchitecture = () => console.log(arch());