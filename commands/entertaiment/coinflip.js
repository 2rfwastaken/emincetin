const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('coinflip')
    .setDescription('Yazı mı tura mı?'),

  async execute(interaction) {
    const sonuc = Math.random() < 0.5 ? 'Yazı 🪙' : 'Tura 🪙';
    await interaction.reply(`Sonuç: **${sonuc}**`);
  },
};
