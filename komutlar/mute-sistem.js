const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (bot, message, args, tools) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "852938355377569812") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya ! ɱႦ Leina 👻#0001 Bana Ulaşın```')

}


  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "el!";
  const embed = new Discord.MessageEmbed()
  
  .setAuthor(`Komutlar`, message.author.avatarURL)
    .setDescription(`Prefix: **${prefix}**`)

.setImage("https://cdn.discordapp.com/attachments/882711302634631239/884087439092768838/standard.gif") 

  .addField("Leina Mute Sistemi (3)", `
Sadece premium üyelerimizin kullanabileceği komutlar;
\`${prefix}mute-rol\` \`${prefix}mute\` \`${prefix}mute-rol oluştur\`
`)

 .addField("Bağlantılar", `
[Davet Et](https://discord.com/oauth2/authorize?client_id=856441553543495720&scope=bot&permissions=805314622) -- [Destek Sunucusu](https://discord.gg/KaQ8vft3WF) 
`)
 

    .setColor("RANDOM")
    .setFooter(`Leina © | Tüm hakları saklıdır.`)
  .setTimestamp()     
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mute-bilgi","mte-y","mute-help","mute-yardım"],
  permLevel: 0
};

exports.help = {
  name: "mute-sistem"
};
