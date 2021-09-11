const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require("../ayarlar.json");
exports.run = async(client, message, args) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "852938355377569812") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya ¿  ! ɱႦ Leina 👻#0001 Bana Ulaşın```')

}

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:iptal:590136777155543040>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`Modlog Kanalı Zaten ayarlı değil.`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(`ModLog Kanalı başarıyla sıfırlandı.`);
  
    return
  }
  
if (!logk) return message.channel.send(`Bir modlog kanalı belirtmelisin.`);

db.set(`log_${message.guild.id}`, logk.id)

message.channel.send(`Mod-Log kanalı başarıyla ${logk} olarak ayarlandı.`);
 message.react('882494754141634615')

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog','log-ayarlama','logayarla','log','vkanal','kayıtkanalı','d'],
    permLevel: 2 ,//Kendi permlerinize göre ayarlayın,
  kategori:'moderasyon'
};

exports.help = {
    name: 'mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};
   