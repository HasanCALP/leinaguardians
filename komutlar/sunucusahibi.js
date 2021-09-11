const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = async (bot, message, args) => {
const tac = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription(`Sunucu Sahibi ;<@${message.guild.owner.id}> \`${message.guild.owner.id})\``)
    .setFooter(`Komutu kullanan: ${message.author.tag}`);
  message.channel.send(tac)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu-sahibi','tac','sahip'],
  permLevel: 0
};

exports.help = {
  name: "taç",
  description: "",
  usage: ""
};