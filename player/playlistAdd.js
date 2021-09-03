const Discord = require('discord.js')

module.exports = (client, message, queue, playlist) => {
    const { guild } = message;
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Aggiunto alla coda", "https://media.giphy.com/media/f2JmYpI53jxOT1tlbY/source.gif")
        .setDescription(`${client.emotes.music} - ${playlist.title} aggiunto alla coda (**${playlist.tracks.length}** canzone/i!`)

    message.channel.send(embed);
};