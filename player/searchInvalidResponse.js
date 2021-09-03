const Discord = require('discord.js')

module.exports = (client, message, query, tracks, content, collector) => {
    const { guild } = message
    const cancelembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Cancellata", "https://media.giphy.com/media/f2JmYpI53jxOT1tlbY/source.gif")
        .setDescription(`${client.emotes.success} - La selezione è stata **cancellata**!`)

    const selectembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Hey!')
        .setDescription(`${client.emotes.error} -  Devi scegliere un numero tra **1**-**${tracks.length}**`)

    
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(cancelembed);
    } else message.channel.send(selectembed);
};