const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.react('🤔');
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Info")
  .setColor("#072b66")
  .setThumbnail(bicon)
  .addField("Name", bot.user.username)
  .addField("Bot Image", "Karbon bot image from Lxi Inc. All rights reserved.")
  .addField("Created", bot.user.createdAt)
  message.channel.send(botembed)

}

module.exports.help = {
  name: "about"
}
