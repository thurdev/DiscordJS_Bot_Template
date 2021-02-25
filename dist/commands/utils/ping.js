module.exports = {
    name: 'ping',
    usage: `${process.env.PREFIX}ping`,
    aliases: [],
    description: "",
    run: async (client, message) => {
        if (message.author.id != process.env.OWNER_ID)
            client.logs.add({
                action: 'USE_COMMAND',
                user: message.author.id,
                command: module.exports.name
            });
        message.channel.send('PONG');
    }
};
//# sourceMappingURL=ping.js.map