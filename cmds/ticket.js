const discord = require("discord.js");

module.exports.run = async (bot, message, arg) => {

    const categoryid = "819916538244235315";

    var username = message.author.username;
    var userdiscriminator = message.author.disciminator;

    var bool = false;

    message.guild.channels.forEach((channels) =>{

        if(channels.name == username.tolowercase()+ ''-'' + userdiscriminator) {

         message.channel.send("je hebt al een ticket aangemaakt");

            bool = true;

        }
        
    });

    if(bool == true) return;

    var embedcreateticket = new discord.MessageEmbed()
        .setTitle("hoi" + message.author.username)
        .setFooter("suport kanaal wordt aangemaakt");

        message.channel.send(embedcreateticket);



}

module.exports = {
    name: "ticket"
}