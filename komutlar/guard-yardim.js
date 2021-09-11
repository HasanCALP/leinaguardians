const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setDescription('** Leina Global | Guard Yardım**')
  .setColor("RANDOM")
  .addField("» **!ban**" , " **Bir kullanıcıyı sunucudan engellersiniz.** ")
  .addField("» **!sustur**", " **Bir kullanıcıyı susturur.** ",)
  .addField("» **!kanal-koruma**", "  **Kanal koruma sistemini aktif eder.** ",)
  .addField("» **!küfür-engel**", "    **Küfür engel sistemini aktif eder.** ",)
  .addField("» **!reklam-engel**", " **Reklam engel sistemini aktif eder.** ",)
  .addField("» **!sohbet-aç**", " **Sohbet kanalına yazmayı aktif eder.** ",)
  .addField("» **!sohbet-kapat**", " **Sohbet kanalına yazmayı devredışı bırakır.** ",)
  .addField("» **!temizle**", " **Mesaj silmeye yarar.** ",)
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
  aliases: ["guard-yardım"],
  permLevel: 0
};

exports.help = {
  name: 'guard-yardım' ,
  description: 'Guard komutları gösterir.',
  usage: 'guard-yardım'
};