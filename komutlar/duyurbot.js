const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id != "478943598151335974") return message.channel.send("Bu komut sadece yapımcıma aittir.");

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Gönderilecek mesajı lütfen yaz.');

  message.delete();

  console.log(`Duyuru Gönderildi: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(`:white_check_mark: Mesaj Başarıyla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gönderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyurbot'],
  permLevel: 4
};

exports.help = {
  name: 'duyurbot',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'duyurbot'
};