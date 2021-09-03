const Discord = require('discord.js')

module.exports = (client, message, query, tracks) => {
    const { guild } = message;
    const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Hey!')
        .setDescription(`${client.emotes.error} - Non hai dato una risposta valida... ti prego rifai il comando!`)

    message.channel.send(embed);
};