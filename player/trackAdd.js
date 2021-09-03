const Discord = require('discord.js')

module.exports = (client, message, queue, track) => {
    const { guild } = message
    const addembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Aggiunto", "https://media.giphy.com/media/f2JmYpI53jxOT1tlbY/source.gif")
        .setDescription(`${client.emotes.music} - ${track.title} aggiunto alla coda!`)

    message.channel.send(addembed)
};