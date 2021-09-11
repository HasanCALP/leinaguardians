const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setDescription('** Leina Global | Güncellemeler**')
  .setColor("RANDOM")
  .addField("» !destek   ", "\u200b")
  .addField("» L*dil","\u200b")
  .addField("» Yakında", "\u200b")
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
  aliases: ["güncellemeler", "yeni", "yenilik", "güncel"],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler' ,
  description: 'Tüm yenilikleri gösterir.',
  usage: 'yenilikler'
};