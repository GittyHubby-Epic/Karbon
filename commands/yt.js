const Discord = require('discord.js');
const errors = require('./utils/errors.js');
module.exports.run = async (bot, message, args) => {
    var search = require('youtube-search');
 
    var opts = {
      maxResults: 1,
      key: process.env.ytkey
    };
    let nm = args.join(' ');
    if(!nm) return errors.correctUsage(message, "--yt [video title name]")
    search(nm, opts, function(err, results) {
      if(err) return console.log(err);
      message.channel.send(':movie_camera: ***' + results[0].title + '*** - ' + results[0].channelTitle + '\n' + results[0].link).catch(console.error);
    });
}


module.exports.help = {
    "name": "yt"
}
