const Discord = require('discord.js')

module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

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

        const skipembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Skip')
            .setDescription(`${client.emotes.success} - Skippata!`)

        if (!message.member.voice.channel) return message.channel.send(notvembed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(notsvembed);

        if (!client.player.getQueue(message)) return message.channel.send(nomusicembed);

        const success = client.player.skip(message);

        if (success) message.channel.send(skipembed);
    },
};