const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let mesaj = args.slice().join(' ')
if (!mesaj) return message.reply('lütfen önerinizi yazın')
message.delete()
client.users.cache.get("852938355377569812").send(new Discord.MessageEmbed()
.addField('Eylem', 'Öneri')
.addField('Kullanıcı', message.author.tag)
.addField('Sunucu', message.guild.name)
.addField('Öneri', mesaj)
).then(a => message.channel.send('Botumuza Öneri Yaptığınız İçin Teşekkürler :)'))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"],
  permLevel: 0
};

exports.help = {
  name: 'öneri',
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır",
  usage: 'öneri <mesaj>'
};