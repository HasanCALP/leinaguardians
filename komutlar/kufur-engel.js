const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send("Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın")
  
  if (!args[0]){
    message.channel.send('**!küfür-engel** ``aç/kapat`` yazmalısın.')
  }
  if (args[0] === 'aç'){
    message.channel.send("**Küfür Engel** sistemi aktif edildi.")
    
    db.set(`kufur_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send('**Küfür Engel** sistemi devredışı bırakıldı.')
    
    db.set(`kufur_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "küfür-engel",
  description: "Küfür engel açar yada kapatır.",
  usage: "küfür"
}