const Discord = require('discord.js');
const katoms = require('../katoms.json');
const bankacc = require('../katoms2.json');
const errors = require('./utils/errors.js');
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
var num = args[0];
if(!katoms[message.author.id]){
  katoms[message.author.id] = {
    katoms:100
  }
  fs.writeFile('../katoms.json', JSON.stringify(katoms), err => {
    if(err) console.log(err);
  })
}

if(!num) return errors.correctUsage(message, "--transferback [num. katoms]");
else if(!bankacc[message.author.id]) return errors.noKatoms(message);
else{
  bankacc[message.author.id].bankacc -= num;
  fs.writeFile('../katoms2.json', JSON.stringify(katoms), err => {
    if(err) console.log(err);
  })
  
  var oof = katoms[message.author.id].katoms + parseInt(num);
    fs.writeFile('../katoms.json', JSON.stringify(katoms), err => {
    if(err) console.log(err);
  })
  message.reply(`**Transfer Successful! You now have: ${katoms[message.author.id].katoms} Katoms, and your alt bank account has ${oof} Katoms!**`)
}
}
module.exports.help = {
  name: "transferback"
}