const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!";

client.on('ready', () => {
  console.log(`Bot:Başarıyla giriş yaptı!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply("Aleyküm Selam");
  }
});

client.login("MzA5MDM0MjYwMTAxMjAxOTIx.DW3a2w.rh4xxbbtki6xaQ9i3gl4VLl40fY11");
