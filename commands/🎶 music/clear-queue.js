const Discord = require('discord.js');

module.exports = {
    name: 'clearqueue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clearqueue',

    execute(client, message) {

        const notvembed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Hey!')
            .setDescription(`${client.emotes.error} - Non sei in vocale`)

        const notsvembed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Hey!')
            .setDescription(`${client.emotes.error} - Non sei nella mia stessa vocale`)
    
        const nomusicembed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Hey!')
            .setDescription(`${client.emotes.error} - Qui non c'è niente in riproduzione`)

        const onesongembed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Hey!')
            .setDescription(`${client.emotes.error} - C'è solo una canzone nella coda.`)

        const clearembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Clear")
            .setDescription(`${client.emotes.success} - La coda è stata **cancellata**!`)


        if (!message.member.voice.channel) return message.channel.send(notvembed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(notsvembed);

        if (!client.player.getQueue(message)) return message.channel.send(nomusicembed);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(onesongembed);

        client.player.clearQueue(message);

        message.channel.send(clearembed);
    },
};