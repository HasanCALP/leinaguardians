const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setDescription('** Leina Global | Yardım**')
  .setColor("RANDOM")
  .addField("» **L*guard-yardım**" , " **Guard (Koruma) komutlarını listeler.** ")
  .addField("» **L*kayıt-yardım**", "  **Kayıt komutlarını listeler.** ",)
  .addField("» **L*genel-yardım**", "    **Genel yardım komutlarını listeler.** ",)
  .addField("» **L*eğlence-yardım**", " **Eğlence komutlarını listeler.** ",)
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
  aliases: ["yardım"],
  permLevel: 0
};

exports.help = {
  name: 'yardım' ,
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};