const Discord = require('discord.js')

module.exports = (client, message, track) => {
    const { guild } = message
    const playembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Riproducendo', "https://media.giphy.com/media/f2JmYpI53jxOT1tlbY/source.gif")
        .setDescription(`${client.emotes.music} - Riproducendo ${track.title}`)

    message.channel.send(playembed);
};