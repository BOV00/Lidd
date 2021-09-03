const Discord = require('discord.js');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
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
        
        const loopoffembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Loop')
            .setDescription(`${client.emotes.success} - Loop disattivato`)

        const loopqueueembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Loop')
            .setDescription(`${client.emotes.success} - Loop attivato per la coda`)

        const loopsongembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Loop')
            .setDescription(`${client.emotes.success} - Loop attivato per la canzone`)  

        if (!message.member.voice.channel) return message.channel.send(notvembed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(notsvembed);

        if (!client.player.getQueue(message)) return message.channel.send(nomusicembed);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(loopoffembed);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(loopqueueembed);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(loopoffembed);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(loopsongembed);
            };
        };
    },
};