let db = require("quick.db");
let ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "852938355377569812") return message.channel.send('Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya ! ɱႦ Leina 👻#0001 Bana Ulaşın')

}

  if (!message.member.hasPermission(`ADMINISTRATOR`))
    return message.channel.send(
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`
    );

  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send(
      `❌ **Bir rol etiketlemen gerekmekte örnek: __${ayarlar.prefix}abone-yetkili-rol @rol__**`
    );

  db.set(`aboneyetkilisi.${message.guild.id}`, rol.id);
  message.channel.send(
    `✅ **Abone yetkilisi başarıyla "${rol}" olarak ayarlandı.**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-y-rol"],
  perm: 0
};
exports.help = {
  name: "abone-yetkili-rol"
};

exports.play = {
  kullanım: "L*abone-yetkili-rol @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};