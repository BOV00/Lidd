const Discord = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        try {
            const queue = client.player.getQueue(message);

            const queueembed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`Ora : ${queue.playing.title} | ${queue.playing.author}`, "https://media.giphy.com/media/f2JmYpI53jxOT1tlbY/source.gif")
                .setTitle(`Coda - ${message.guild.name} ${client.player.getQueue(message).loopMode ? '(Loop **On**)' : ''}`)
                .setDescription(queue.tracks.map((track, i) => { return `**#${i + 1}** - ${track.title} | ${track.author}` }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `e **${queue.tracks.length - 5}** altre canzoni...` : `Nella playlist **${queue.tracks.length}** canzone/i`}`)
    
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
    
    
            if (!message.member.voice.channel) return message.channel.send(notvembed);

            if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(notvembed);

            if (!client.player.getQueue(message)) return message.channel.send(nomusicembed);

            message.channel.send(queueembed);
        } catch (err) {
            const nomusicembed = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle('Hey!')
                .setDescription(`${client.emotes.error} - Qui non c'è niente in riproduzione`)

            message.channel.send(nomusicembed);
        }
    },
};