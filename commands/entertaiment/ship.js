const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ship')
    .setDescription('İki kullanıcı arasındaki uyumu ölçer.')
    .addUserOption(option =>
      option.setName('kullanıcı1').setDescription('İlk kişi').setRequired(true))
    .addUserOption(option =>
      option.setName('kullanıcı2').setDescription('İkinci kişi').setRequired(true)),

  async execute(interaction) {
    const user1 = interaction.options.getUser('kullanıcı1');
    const user2 = interaction.options.getUser('kullanıcı2');
    const score = Math.floor(Math.random() * 101);

    let emoji = '💔';
    if (score > 75) emoji = '💖';
    else if (score > 50) emoji = '💘';
    else if (score > 30) emoji = '💕';

    await interaction.reply(`❤️ ${user1.username} + ${user2.username} = **%${score}** uyum! ${emoji}`);
  },
};
