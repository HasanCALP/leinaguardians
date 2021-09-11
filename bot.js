const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const db = require("nrc.db");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
moment.locale("tr");
const chalk = require("chalk");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);

//--------------------------------KOMUTLAR-------------------------------\\

/////////
client.on("message", async msg => {
  let a = await db.fetch(`kufur_${msg.guild.id}`);
  if (a == "acik") {
    const küfür = [
      "yarak",
      "şikiş",
      "mk",
      "amk",
      "aq",
      "orospu",
      "oruspu",
      "oç",
      "sikerim",
      "yarrak",
      "piç",
      "amq",
      "sik",
      "amcık",
      "çocu",
      "sex",
      "seks",
      "amına",
      "orospu çocuğu",
      "sg",
      "siktir git",
      "31",
      "ananın amına yarak"
    ];
    if (küfür.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
          msg.delete();

          return msg.channel
            .send(`Lütfen biraz saygılı davran, küfür sana hiç yakışmıyor.`)
            .then(msg => msg.delete(10000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!a) return;
});

///reklamengel

client.on("message", async message => {
  const lus = await db.fetch(`reklamengel_${message.guild.id}`);
  if (lus) {
    const reklamengel = [
      "discord.app",
      "discord.gg",
      ".party",
      ".com",
      ".az",
      ".net",
      ".io",
      ".gg",
      ".me",
      "https",
      "http",
      ".com.tr",
      ".org",
      ".tr",
      ".gl",
      "glicht.me/",
      ".rf.gd",
      ".biz",
      "www.",
      "www"
    ];
    if (
      reklamengel.some(word => message.content.toLowerCase().includes(word))
    ) {
      try {
        if (!message.member.permissions.has("KICK_MEMBERS")) {
          message.delete();

          return message
            .reply("**Hey Dur!** Bu sunucuda reklamları engelliyorum.")
            .then(message => message.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!lus) return;
});
client.on("messageUpdate", async message => {
  const lus = await db.fetch(`reklamengel_${message.guild.id}`);
  if (lus) {
    const reklamengel = [
      "discord.app",
      "discord.gg",
      ".party",
      ".com",
      ".az",
      ".net",
      ".io",
      ".gg",
      ".me",
      "https",
      "http",
      ".com.tr",
      ".org",
      ".tr",
      ".gl",
      "glicht.me/",
      ".rf.gd",
      ".biz",
      "www.",
      "www"
    ];
    if (
      reklamengel.some(word => message.content.toLowerCase().includes(word))
    ) {
      try {
        if (!message.member.permissions.has("KICK_MEMBERS")) {
          message.delete();

          return message
            .reply("**Hey Dur!** Bu sunucuda reklamları engelliyorum.")
            .then(message => message.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!lus) return;
});

/////Rol Koruma
client.on("roleDelete", async role => {
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  role.guild.roles.create({
    data: {
      name: role.name,
      color: role.color,
      hoist: role.hoist,
      permissions: role.permissions,
      mentionable: role.mentionable,
      position: role.position
    },
    reason: "Silinen Rol Açıldı."
  });
});
client.on("roleCreate", async role => {
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_CREATE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  role.delete();
});
//KanalKoruma

client.on("channelDelete", async function(channel) {
  let rol = await db.fetch(`kanalk_${channel.guild.id}`);

  if (rol) {
    const guild = channel.guild.cache;
    let channelp = channel.parentID;

    channel.clone().then(z => {
      let kanal = z.guild.channels.find(c => c.name === z.name);
      kanal.setParent(
        kanal.guild.channels.find(channel => channel.id === channelp)
      );
    });
  }
});

//**===================================================================================================**\\

client.on("guildMemberAdd", async member => {
  let kanal1 = await db.fetch(`otorolkanal_${member.guild.id}`);
  let rol1 = await db.fetch(`otorolrol_${member.guild.id}`);
  let kanal = member.guild.channels.cache.get(kanal1);
  let rol = member.guild.roles.cache.get(rol1);
  if (!kanal) return;
  if (!rol) return;
  kanal.send(
    `${member} adlı kullanıcıya başarıyla **@${rol.name}** rolü verildi. :white_check_mark:`
  );
  member.roles.add(rol);
});

client.on("guildCreate", guild => {
  let add = client.channels.get("879078032919375928");
  const eklendim = new Discord.RichEmbed()

    .setTitle(`Sunucuya Eklendim`)
    .setTimestamp()
    .setColor("GREEN")
    .setThumbnail(guild.iconURL)
    .addField(`Sunucu İsmi`, guild.name)
    .addField(`Sunucu ID`, guild.id)
    .addField(`Kurucu`, guild.owner.user.tag)
    .addField(`Kurucu ID`, guild.owner.user.id)
    .addField(`Üye Sayısı`, guild.memberCount);

  add.send(eklendim);
});

client.on("guildDelete", guild => {
  let remove = client.channels.get("879078032919375928ID");
  const atildim = new Discord.RichEmbed()

    .setTitle(`Sunucudan Atıldım`)
    .setTimestamp()
    .setColor("RED")
    .setThumbnail(guild.iconURL)
    .addField(`Sunucu İsmi`, guild.name)
    .addField(`Sunucu ID`, guild.id)
    .addField(`Kurucu`, guild.owner.user.tag)
    .addField(`Kurucu ID`, guild.owner.user.id)
    .addField(`Üye Sayısı`, guild.memberCount);

  remove.send(atildim);
});

//**===================================================================================================**\\

client.on("guildCreate", guild => {
  let kanal = guild.channels.cache.filter(c => c.type === "text").random();

  kanal.send(
    new Discord.MessageEmbed()
      .setTitle("Selam millettt! Guard'cığınız geldiiii!!!")
      .setDescription(
        `Benim hakkımda yardım almak için **!yardım** komutunu kullanmalısın, sunucunu korumak istersen **!guard-yardım** menüsünü bir gözden geçir!`
      )
  );
});

//**===================================================================================================**\\

const disbut = require("discord-buttons");
disbut(client);

client.on("message", async message => {
  if (message.content.startsWith("!destek")) {
    let button = new disbut.MessageButton()
      .setStyle("green")
      .setLabel("Davet et")
      .setID("click_to_function");
    let button2 = new disbut.MessageButton()
      .setStyle("green")
      .setLabel("Oy ver")
      .setID("click_to_function2");
    let button3 = new disbut.MessageButton()
      .setStyle("green")
      .setLabel("Site")
      .setID("click_to_function3");
    let button4 = new disbut.MessageButton()
      .setStyle("green")
      .setLabel("Destek sunucusu")
      .setID("click_to_function4");

    message.channel.send("**Hangi linki istiyorsanız o butona basınız.**", {
      buttons: [button, button2, button3, button4]
    });
  }
});

client.on("clickButton", async button => {
  if (button.id === "click_to_function") {
    button.channel.send(
      new Discord.MessageEmbed()
        .setFooter("Leina / Discord'da Yeni Devrim!", client.user.avatarURL())
        .setDescription(
          `[Davet Linkim](https://discord.com/oauth2/authorize?client_id=856441553543495720&scope=bot&permissions=805314622)`
        )
        .setColor("BLUE")
        .setAuthor("Davet Linki")
    );
  }
  if (button.id === "click_to_function2") {
    button.channel.send(
      new Discord.MessageEmbed()
        .setFooter("Leina / Discord'da Yeni Devrim!", client.user.avatarURL())
        .setDescription(`[Oy Linkim](Yakında)`)
        .setColor("RED")
        .setAuthor("Oy Linki")
    );
  }
  if (button.id === "click_to_function3") {
    button.channel.send(
      new Discord.MessageEmbed()
        .setFooter("Leina / Discord'da Yeni Devrim!", client.user.avatarURL())
        .setDescription(`[Site Linkim](Yakındaa)`)
        .setColor("BLUE")
        .setAuthor("Site Linki")
    );
  }
  if (button.id === "click_to_function4") {
    button.channel.send(
      new Discord.MessageEmbed()
        .setFooter("Leina / Discord'da Yeni Devrim!", client.user.avatarURL())
        .setDescription(`[Destek Sunucu Linkim](https://discord.gg/gQjqPRhjUd)`)
        .setColor("BLUE")
        .setAuthor("Destek Sunucu Linki")
    );
  }
});

client.on("guildCreate", guild => {
  let InFlames = guild.channels.filter(c => c.type === "text").random();
  InFlames.send(
    "**HEEEY Millet!** Sunucunuzu koruyacak o güzel kişi geldi ya! Komutlarıma erişmek için **L*yardım** yazmayı unutmaa!!"
  );
});