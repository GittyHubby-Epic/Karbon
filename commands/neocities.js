const Discord = require('discord.js');
const Neocities = require('neocities');
const request = require('request');
const cheerio = require('cheerio');
const oof = new Neocities() 
module.exports.run = async (bot, message, args) => {
    var user = args[0];
    request(`https://neocities.org/site/${user}`, (error, response, html) => {
        if(!error && response.statusCode === 200){
          const $ = cheerio.load(html);
          const comment = $('.news-item');
          const output = comment.find('.content').first().text().replace(/\s\s+/g, "\n");
          //message.channel.send(output);
          if(!output){
            message.channel.send("Looks like you don't have anything to say at the moment!")
          }
        var lastUpdated = $('.stat strong').text();
        console.log(lastUpdated);
        }

    })
    
   oof.info(user, resp => {
    var views = resp.info.views;
    var hits = resp.info.hits;
   // var createdDate = 
   })
    
    
};

module.exports.help = {
  name: "neocities"
}
