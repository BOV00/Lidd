const Discord = require('discord.js')

module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        const { guild } = message;

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

        const stopembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Stop')
            .setDescription(`${client.emotes.success} - Stoppata la musica`)

        if (!message.member.voice.channel) return message.channel.send(notvembed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(notsvembed);

        if (!client.player.getQueue(message)) return message.channel.send(nomusicembed);

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) message.channel.send(stopembed);
    },
};