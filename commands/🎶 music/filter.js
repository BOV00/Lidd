const Discord = require('discord.js');

module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

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

        const decembed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('HEY')
            .setDescription(`${client.emotes.error} - Dichiara un filtro`)

        const nofilterembed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('HEY')
            .setDescription(`${client.emotes.error} - Il filtro non esiste`)

        const filteroffembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Filter')
            .setDescription(`${client.emotes.music} - Sto **togliendo** il filtro alla canzone, aspetta un attimo... N.B. Più lunga è la canzone, più tempo da aspettare`)

        const filteronembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Filter')
            .setDescription(`${client.emotes.music} - Sto **mettendo** il filtro alla canzone, aspetta un attimo... N.B. Più lunga è la canzone, più tempo da aspettare`)


        if (!message.member.voice.channel) return message.channel.send(notvembed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(notsvembed);

        if (!client.player.getQueue(message)) return message.channel.send(nomusicembed);

        if (!args[0]) return message.channel.send(decembed);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(nofilterembed);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(filteronembed);
        else message.channel.send(filteroffembed);
    },
};