const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");
let katoms = require("../katoms.json");
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
 
var num1 = Math.floor(Math.random() * 100) + 150;
 var num2 = Math.floor(Math.random() * 200) + 300;
 var num3 = Math.floor(Math.random() * 500) + 300;

 var lol = Object.keys(ticket)
 console.log(lol)
let msg = await message.channel.send(":warning: | **CONFIRMATION: Are you sure you want to run the lottery and pick the winners?**");
 const res = await message.channel.awaitMessages(response => {
  response.content === "yes" || response.content === "no"
  if(response.content === "yes"){
 //  message.reply(`Okay, so these are the winners of the lottery: <@${lol[randomness]}>, who earned 250 Katoms <@${lol[randomness2]}>, who earned 500 Katoms, as well as <@lol[randomness3>, who earned 750 Katoms + A special role!`)

 var thirdplace = Math.random() * lol.length;
  var secondplace = Math.random() * lol.length;
  var firstplace = Math.random() * lol.length;
if(!katoms[thirdplace]){
 katoms[thirdplace] = {
  katoms:100
 }
  katoms[thirdplace].katoms = katoms[`${thirdplace}`].katoms += num1;
 fs.writeFile('../katoms.json', JSON.stringify(katoms), err => {
   if(err) console.log(err);
 })
 console.log(katoms[thirdplace])
}   

   else  katoms[thirdplace].katoms = katoms[`${thirdplace}`].katoms += num1;
  }
  else if(response.content === "no") return message.reply(":x: | **Lottery Canceled**")
 })
};

module.exports.help = {
  name: "lottery"
}
