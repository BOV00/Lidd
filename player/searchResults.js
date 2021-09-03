module.exports = (client, message, query, tracks) => {
    const { guild } = message
    message.channel.send({
        embed: {
            color: 'RANDOM',
            author: { name: `Cosa ho trovato con ${query}`},
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};