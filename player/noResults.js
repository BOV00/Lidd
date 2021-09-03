const Discord = require('discord.js')

module.exports = (client, message, query) => {
    const { guild } = message;
    const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Hey!')
        .setDescription(`${client.emotes.error} - Non ho trovato nulla per ${query} !`)

    message.channel.send(embed);
};