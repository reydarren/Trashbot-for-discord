var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `T`
    if (message.substring(0, 1) == 'T') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        //var role = message.guild.roles.find('name','squad');
       
        args = args.splice(1);
        switch(cmd) {
            // There pings @here
            case 'here':
                bot.sendMessage({
                    to: channelID,
                    message: '@here This is a test'
                });
            break;
            // Tall pings @everyone
            case 'all':
                bot.sendMessage({
                    to: channelID,
                    message: '@everyone This is a test'
                });
            break;
            // Tcs pings all with @compsci peeps role
            case 'cs':
                bot.sendMessage({
                    to: channelID,
                    message: '@CompSci Peeps This is a test'
                });
            break;
            // Just add any case commands if you want to..
            //case 'Add command here':
            //bot.sendMessage({
                //to: channelID,
                //message: 'What the bot will say here'
           // });
            // break;
         }
     }
});
