const Discord = require('discord.js');
const Neocities = require('neocities');
const request = require('request');
const cheerio = require('cheerio');
const oof = new Neocities('elementz', ) 
module.exports.run = async (bot, message, args) => {
    var user = args[0];
    request(`https://neocities.org/site/${user}`, (error, response, html) => {
        if(!error && response.statusCode === 200){
          const $ = cheerio.load(html);
          const comment = $('.news-item');
          const output = comment.find('.content').next().text();
          console.log(comment.children);
        }
    })
    
    
    
    
};

module.exports.help = {
  name: "neocities"
}
