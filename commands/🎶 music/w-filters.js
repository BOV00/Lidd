const Discord = require('discord.js');

module.exports = {
    name: 'w-filters',
    aliases: ['filters'],
    category: 'Music',
    utilisation: '{prefix}w-filters',

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

        if (!message.member.voice.channel) return message.channel.send(notvembed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(notsvembed);

        if (!client.player.getQueue(message)) return message.channel.send(nomusicembed);

        const filtersStatuses = [[], []];

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? client.emotes.success : client.emotes.off));
        });

        message.channel.send({
            embed: {
                color: 'ORANGE',
                fields: [
                    { name: `Filtri`, value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `Lista dei filtri abilitati/disabilitati.\nUsa \`${client.config.discord.prefix}filter\` per aggiungere/togliere i filtri (ex ${client.config.discord.prefix}filtrer 8D).`,
            },
        });
    },
};