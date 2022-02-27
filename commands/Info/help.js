const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const { prefix, developerID, bot, support } = require("../../config.json")



module.exports = {
  name: "help",
  description: "Info",

  run: async (client, message, args) => {


    const embed = new Discord.MessageEmbed()
    .setTitle(`${bot} Help 🛡️`)
    .setImage("https://cdn.discordapp.com/attachments/916264729503236116/947476793999384576/tumblr_8d12ffc4cf92cc55ce12e7cf0f2da7af_f0197c0a_500.gif")
    .setDescription(` Hello **${message.author.username}**, \n *Choose an category below to see commands* \n\n :question: New to ${bot}? Check out server \n ${support}`)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#fff3c7")
    .setFooter(`Requested by: ${message.author.tag}`)


    const music = new Discord.MessageEmbed()
    .setColor("#fff3c7")
    .setTitle(`Music 🎶`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Here are all the music commands: \n\n \`join\`, \`leave\`, \`loop\`, \`nowplaying\`, \`pause\`,  \`play\`,  \`queue\`,  \`remove\`,  \`resume\`,  \`search\`,  \`skip\`,  \`skipall\`,  \`stop\`,  \`volume\``)
    .setFooter(`Requested by: ${message.author.tag}`)



    const info = new Discord.MessageEmbed()
    .setColor("#fff3c7")
    .setTitle(`Info <a:info:945964995374637056>`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Here are all the Info commands: \n\n \`help\`, \`invite\`, \`setprefix\`,  \`setpre\`,  \`removepremium\``)
    .setFooter(`Requested by: ${message.author.tag}`)


    let button1 = new MessageButton()
    .setLabel(`Music`)
    .setID(`music`)
    .setStyle("orange");
    

    let button2 = new MessageButton()
    .setLabel(`Info`)
    .setID(`info`)
    .setStyle("Orange");



    let row = new MessageActionRow()
    .addComponents(button1, button2);



    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {

        if(b.id == "music") {

            MESSAGE.edit(music, row);
            await b.reply.defer()
            
        }

         if(b.id == "info") {

            MESSAGE.edit(info, row);
            await b.reply.defer()
            
        }


    });


   
}};