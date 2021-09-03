const Discord = require('discord.js')

module.exports = (client, message, queue) => {
    const { guild } = message;
    const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Hey!')
        .setDescription(`${client.emotes.error} - La musica è stata stoppata perché mi avete disconnesso!`)
        
    message.channel.send(embed);
};