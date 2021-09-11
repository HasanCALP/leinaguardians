const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`**Bu komutu kullanabilmek için ``Yönetici`` yetkisine sahip olmalısın!`)
if (!args[0])  {
    const küfürcu0k = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`**!reklam-engel** ``aç/kapat`` yazmalısın.`)
      return message.channel.send(küfürcu0k)

  }   
  if (args [0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, '**Reklam Engel** sistemi aktif edildi.')
    let lus = await db.fetch(`reklamengel_${message.guild.id}`)
    
    const reklamengelcim = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('**Reklam Engel** sistemi aktif edildi.')
    return message.channel.send(reklamengelcim)

  }
  
  if (args [0] == 'kapat') {
      
    db.delete(`reklamengel_${message.guild.id}`)

   const küfürengelcim22 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('**Reklam Engeli** sistemi devredışı bırakıldı.')
    return message.channel.send(küfürengelcim22)
  }

  
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['reklam-engel'],
 permLevel: 0
};

exports.help = {
 name: 'reklam-engelle'
};