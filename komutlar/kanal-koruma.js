const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let prefix = ayarlar.prefix;

  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
      .setDescription(`**!kanal-koruma** ``aç/kapat`` yazmalısın`)
      .setTimestamp();
    return message.channel.send(sa);
  }
  if (args[0] === "aç") {
    db.set(`kanalk_${message.guild.id}`, "Aktif");
    const sa = new Discord.MessageEmbed()
      .setDescription(`**Kanal Koruma** sistemi aktif edildi.`)
      .setTimestamp();
    return message.channel.send(sa);
  }
  if (args[0] === "kapat") {
    db.delete(`kanalk_${message.guild.id}`);
    const sa = new Discord.MessageEmbed()
      .setDescription(`**Kanal Koruma** sistemi devredışı bırakıldı.`)
      .setTimestamp();
    return message.channel.send(sa);
  }
};
exports.conf = {
  aliases: [],
  permLevel: 8
};
exports.help = {
  name: "kanal-koruma"
};
