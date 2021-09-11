const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`Aktif Edildin!`);
  console.log(`Komutlar Aktifleştirildi!`);
  console.log(`Discorda göre istatistiklerim: ` + client.channels.cache.size + ` adet kanala, ` + client.guilds.cache.size + ` adet sunucuya ve ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kişiye hizmet mi veriyor muşum bennn`);
  client.user.setStatus("online");
   var oyun = [
        "Develepor Arkadaşlarımızla Gurur Duyuyoruz",
        "Botumuz 7/24 Aktiftir",
        `${client.guilds.cache.size} adet sunucuyu koruyorum!`
     
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random]);
        }, 2 * 2500);
}