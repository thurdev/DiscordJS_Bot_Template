"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
module.exports = (client) => {
    const commandsType = fs.readdirSync('./src/commands/');
    commandsType.map((cType) => {
        const commandsFileName = fs.readdirSync(`./src/commands/${cType}/`);
        commandsFileName.map((cFileName) => {
            const commandName = cFileName.split('.').shift();
            const commandFile = require(`../commands/${cType}/${commandName}`);
            client.commands.set(commandName, commandFile);
        });
    });
};
//# sourceMappingURL=commands.js.map