let Discord = require("discord.js");
let db = require("quick.db");
let ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "852938355377569812") return message.channel.send(' Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya ! ɱႦ Leina 👻#0001 Bana Ulaşın')

}

  let aboneyetkilisi = await db.fetch(
    `aboneyetkilisi.${message.guild.id}`
  );
  let abonelog = await db.fetch(`abonelog.${message.guild.id}`);
  let abonerol = await db.fetch(`abonerol.${message.guild.id}`);
  let abonekisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!abonerol)
    return message.channel.send(
      `❌ **__Abone rolü ayarlanmamış!__**`
    );
  if (!abonelog)
    return message.channel.send(
      `❌ **__Abone log kanalı ayarlanmamış!__**`
    );
  if (!aboneyetkilisi)
    return message.channel.send(
      `**__Abone yetkili rolü ayarlanmamış!__**`
    );
  let user = message.mentions.users.first();
  if (!message.member.roles.cache.has(aboneyetkilisi))
    return message.channel.send(
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`
    );

  if (!message.mentions.users.first())
    return message.channel.send(`**Bir Üye Etiketle!**`);

  await abonekisi.roles.add(abonerol);
  const embed = new Discord.MessageEmbed()
    .setTitle(`**__Abone Rolü Verildi!__**`)
    .addField(
      ` <a:810191157552218173:882590013035003904> Abone Rolünü Veren`,
      `<@${message.author.id}>`,
      true
    )
    .addField(
      ` <a:810191157552218173:882590013035003904> Abone Rolü Alan`,
      `${user}`,
      true
    )
    .setColor('#007fff')
    .setImage("https://media.discordapp.net/attachments/882770784047726602/882773466191888434/ezgif.com-gif-maker_1.gif?width=374&height=48")
    .setFooter(`${client.user.username} Abone Sistemi`);
  message.guild.channels.cache.get(abonelog).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone"],
  perm: 0
};
exports.help = {
  name: "a"
};

exports.play = {
  kullanım: "L*abone",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};