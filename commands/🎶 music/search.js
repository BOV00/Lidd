const Discord = require('discord.js')

module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [name]',

    execute(client, message, args) {
        const { guild } = message;

        const notsvembed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Hey!')
            .setDescription(`${client.emotes.error} - Non sei nella mia stessa vocale`)
    
        const nomusicembed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Hey!')
            .setDescription(`${client.emotes.error} - Qui non c'è niente in riproduzione`)

        const declareembed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('HEY!')
            .setDescription(`${client.emotes.error} - Ti prego dichiara il nome della canzone`)
        
        if (!message.member.voice.channel) return message.channel.send(notvembed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(notsvembed);

        if (!args[0]) return message.channel.send(declareembed);

        client.player.play(message, args.join(" "));
    },
};