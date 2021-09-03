const Discord = require('discord.js')

module.exports = (client, message, queue) => {
    const { guild } = message;
    const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Hey!')
        .setDescription(`${client.emotes.error} - Ho stoppato la musica perché nessuno era in vocale!`)

    message.channel.send(embed);
};