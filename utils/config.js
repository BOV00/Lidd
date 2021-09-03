require('dotenv').config()

module.exports = {
    discord: {
        token: process.env.token,
        prefix: process.env.prefix,
    },

    emojis: {
        off: ':x:',
        error: ':warning:',
        queue: ':bar_chart:',
        music: ':musical_note:',
        success: ':white_check_mark:',
    },

    filters: [
        '8D', 
        'gate', 
        'haas', 
        'phaser', 
        'treble', 
        'tremolo', 
        'vibrato', 
        'reverse', 
        'karaoke', 
        'flanger', 
        'mcompand', 
        'pulsator', 
        'subboost', 
        'bassboost', 
        'vaporwave', 
        'nightcore', 
        'normalizer', 
        'surrounding'
    ],
}