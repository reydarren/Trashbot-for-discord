const token = "NTUyOTI5MTYyMzIzNTU4NDMw.D2Q6Ig.1G3Rx88dyVjeeeKaj287X4PErB0";
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(token);

client.on('ready', ()=> {
    console.log('Trash is online!  Bring out the artillery!');
});

client.on('message', message => {

    if(message.content.toLowerCase().startsWith("taddrole"))
    {
        var args = message.content.toLowerCase().split(" ");
        console.log(args);
        if (args[1] === 'sqaud')
        {
            var role = message.guild.roles.find('name', 'squad');
            console.log("Role found!");
            message.member.addRole(role.id);
            message.channel.send('Role successfully added!');

        }
    }    
});

function addUserRole(roleName, message)
{
    var role = message.guild.roles.find('name', roleName);
    message.member.addRole(role.id);
    return;
}