const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
  .setFooter("LeinaGlobal  Bilgi!", client.user.avatarURL())
    .addField("client.emojis.get('') **Botun Sahibi**", "! ɱႦ Leina#0001 ")
    .addField("» **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("» **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("» **Çalışma süresi**", seksizaman, true)
    .addField("» **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("<a:862317774532902912:876356855880904745> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("» **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("» **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("» **Node.JS sürüm**", `${process.version}`, true)
    .addField("» **Müzik Çalınan Sunucu Sayısı**", client.voice.connections.size, true)
    .addField("» **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField(" <a:sag:882936028288135188> **Bit**", `\`${os.arch()}\``, true)
    .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
    .addField("**» Bot Davet**"," [Davet Et](https://discord.com/oauth2/authorize?client_id=856441553543495720&scope=bot&permissions=805314622)");
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};