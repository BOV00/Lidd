const {readdirSync} = require('fs');
const ascii = require('ascii-table')
let table = new ascii("Player");
table.setHeading('Player', ' Load status');
module.exports = (client) => {
    const events = readdirSync('./player').filter(file => file.endsWith('.js'));

    for (const file of events) {
        const player = require(`../player/${file}`);
        if(player){
            client.player.on(file.split(".")[0], player.bind(null, client));
            table.addRow(file,'✅')
        } else {
            table.addRow(file, '❌ -> Error on loading this file, pls go check it')
            continue;
        }
    };

    console.log(table.toString());    
}