export {}

const fs = require('fs');

module.exports = (client: any) => {
    const commandsType = fs.readdirSync('./src/commands/');
    commandsType.map((cType: string) => {
        const commandsFileName = fs.readdirSync(`./src/commands/${cType}/`);
        commandsFileName.map((cFileName: string) => {
            const commandName = cFileName.split('.').shift();
            const commandFile = require(`../commands/${cType}/${commandName}`);
            client.commands.set(commandName, commandFile);
        })
    })
}