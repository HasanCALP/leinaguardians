const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Bu komutu kullanabilmek için `Mesajları Yönet` yetkisine sahip olmalısın');
if(!args[0]) return message.channel.send("**Lütfen silinecek kadar mesaj yazın!** 🚫");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} adet mesaj uzaya fırlatıldı! :rocket:`).then(a => a.delete(200));
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};