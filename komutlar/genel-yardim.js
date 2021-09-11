const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setDescription('** Leina Global | Genel Yardım**')
  .setColor("RANDOM")
  .addField("» ** L*yenilikler**", " **Leina Global'da ne olup bittiğini öğrenin.** ",)
  .addField("» ** L*istatistik**" , " **Leina Global'ın istatistiklerini gösterir.** ")
  .addField("» ** L*ping**", "  **Botun pingini gösterir.** ",)
  .addField("» ** L*ban-yetkili**", "**Ban yetkilisini ayarlar.** ",)
  .addField("» ** L*otorol**", " **Otomatik rol verme sistemini ayarlar.** ",)
  .addField("» ** L*taç **", " **Sunucu Sahibini Gösterir.** ",)
  .addField("» ** L*öneri **", " **Botumuza Öneri Yaparsınız.** ",)

////////////kaç komut varsa okdr ekleyin kendinize göre
  .setFooter('**--------------------------**')
  .setFooter('botun destek sunucusuna gelmek için  :)')
  .setFooter(`${message.author.tag} tarafından.`, message.author.avatarURL())
  
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["genel-yardım"],
  permLevel: 0
};

exports.help = {
  name: 'genel-yardım' ,
  description: 'Genel komutları gösterir.',
  usage: 'genel-yardım'
};