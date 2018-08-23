const Discord = require('discord.js');
const wins = require('../wins.json');
const xp = require('../xp.json');
const fs = require('fs');
const errors = require('./utils/errors.js')

module.exports.run = async (bot, message, args) => {
    if(!wins[message.author.id]){
        wins[message.author.id] = {
            wins:0
        }
    }
    
        if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp:0,
            level:1
        }
    }
    
    
    let user = message.mentions.users.first();
    if(!user) errors.correctUsage(message, "--fight [mention a user to fight]")
//    let lol = args[1] 
    if(!user) message.reply("Please specify a user.")
    else{
    var winnerHealth = Math.floor(Math.random() * 99) + 1
    var loserHealth = 0;
   var arr = [`${message.author.username}`, `${user.username}`];
   var randomwinner = Math.floor(Math.random() * arr.length);
        var winner = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle(":crossed_swords: BATTLE [BETA]")
        .addField(`${arr[randomwinner]} has won the battle!`)
        .addField(`${winnerHealth} - 0`)
    message.channel.send(winner)
    wins[message.author.id].wins = wins[message.author.id].wins += 1
    fs.writeFile("../wins.json", JSON.stringify(wins), err => {
     if(err) console.log(err)
  })
    
    xp[message.author.id].xp = xp[message.author.id].xp += 1;
        fs.writeFile("../xp.json", JSON.stringify(xp), err => {
        if(err) console.log(err)

     }) 
}
}

module.exports.help = {
  name: "fight"
}
