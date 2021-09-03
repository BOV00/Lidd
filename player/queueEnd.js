const Discord = require('discord.js')

module.exports = (client, message, queue) => {
    const { guild } = message;
    const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setAuthor('Stop', "https://media.giphy.com/media/f2JmYpI53jxOT1tlbY/source.gif")
        .setDescription(`${client.emotes.error} - La riproduzuione si è fermata perché la coda è finita!`)

    message.channel.send(embed);
};