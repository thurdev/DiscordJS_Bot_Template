"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
module.exports = (client) => {
    const eventsType = fs.readdirSync('./src/events/');
    eventsType.map((eType) => {
        const eventsFileName = fs.readdirSync(`./src/events/${eType}/`);
        eventsFileName.map((eFileName) => {
            const eventName = eFileName.split('.').shift();
            const eventFile = require(`../events/${eType}/${eventName}`);
            client.on(eventName, eventFile.bind(null, client));
        });
    });
};
//# sourceMappingURL=events.js.map