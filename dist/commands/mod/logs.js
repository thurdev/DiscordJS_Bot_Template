require("../../utils/ExtendedMessage");
module.exports = {
    name: 'logs',
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
        if (client.logs.size > 0)
            return message.inlineReply('No logs to show.');
        message.channel.send(`\`\`\`json\n${JSON.stringify(Array.from(client.logs))}\`\`\``);
    }
};
//# sourceMappingURL=logs.js.map