export {}

const fs = require('fs');

module.exports = (client: any) => {
    const eventsType = fs.readdirSync('./src/events/');
    eventsType.map((eType: string) => {
        const eventsFileName = fs.readdirSync(`./src/events/${eType}/`);
        eventsFileName.map((eFileName: string) => {
            const eventName = eFileName.split('.').shift();
            const eventFile = require(`../events/${eType}/${eventName}`);
            client.on(eventName, eventFile.bind(null, client));
        })
    })
}