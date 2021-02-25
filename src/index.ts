require('dotenv').config()

const { Discord, Client, Collection } = require('discord.js');

const client = new Client();

client.commands = new Collection();
client.logs = new Set();

["events", "commands"].map((handler) => {
    require(`./handlers/${handler}`)(client);
})

client.login(process.env.BOT_TOKEN)