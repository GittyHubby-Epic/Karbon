const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");

module.exports.run = async (bot, message, args) => {
   if(!ticket[message.author.username].username){
   message.reply("Please run the command: --generate.")
 }
   else{
    //  var oof = ticket.ticketid;
    //  console.log(oof);
      console.log(ticket);
 }
  
// message.channel.send(ticket);
  

}

module.exports.help = {
  name: "lottery"
}
