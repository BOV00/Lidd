const Discord = require('discord.js')

module.exports = (client, error, message, args) => {
    const { guild } = message;
    try{
        const notvembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Hey!')
        .setDescription(`${client.emotes.error} - Non sei in vocale`)

    const nomusicembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Hey!')
        .setDescription(`${client.emotes.error} - Qui non c'è niente in riproduzione`)

    const nopermembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Hey!')
        .setDescription(`${client.emotes.error} - Non posso entrare in vocale... ti prego riguarda i miei permessi!`)

    const unavableembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Hey!')
        .setDescription(`${client.emotes.error} - ${args[0].title} non è disponibile. Skippata...`)

    const loadembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Hey!')
        .setDescription(`${client.emotes.error} - La musica si stà caricando`)

    const errorembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Hey!')
        .setDescription(`${client.emotes.error} - ERROR: ${error}`)
    
    switch (error) {
        case 'NotPlaying':
            message.channel.send(nomusicembed);
            break;
        case 'NotConnected':
            message.channel.send(notvembed);
            break;
        case 'UnableToJoin':
            message.channel.send(nopermembed);
            break;
        case 'VideoUnavailable':
            message.channel.send(unavableembed);
            break;
        case 'MusicStarting':
            message.channel.send(loadembed);
            break;
        default:
            message.channel.send(errorembed);
    };
    }catch (err){
        message.channel.send(unavableembed);
    }
  
};
