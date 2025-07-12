const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('language')
    .setDescription('Bot dilini değiştirir.')
    .addStringOption(option =>
      option.setName('dil')
        .setDescription('Dil seçin')
        .addChoices(
          { name: 'Türkçe', value: 'tr' },
          { name: 'English', value: 'en' }
        )
        .setRequired(true)),

  async execute(interaction) {
    const dil = interaction.options.getString('dil');
    await interaction.reply(`🌐 Dil başarıyla **${dil === 'tr' ? 'Türkçe' : 'English'}** olarak ayarlandı.`);
  },
};
