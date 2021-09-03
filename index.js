const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const { Player } = require('discord-player');
client.player = new Player(client);
client.config = require('./utils/config');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new Discord.Collection();
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
["event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
["player"].forEach(handler => {
     require(`./handlers/${handler}`)(client);
});
client.login(client.config.discord.token);