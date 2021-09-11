const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setDescription("Yapımcım İle İyi Anlaşıyoruz :) Yapımcım: ! ɱႦ Leina 👻#0001 Sizi Kandırmasınlar Diye Id side Bu: <@852938355377569812>")
    .setFooter("Leina Bot Sunar")
  message.channel.send(rexus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "",
  usage: ""
};