const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('backup')
    .setDescription('Sunucunun yedeğini alır.'),

  async execute(interaction) {
    await interaction.reply('📦 Yedek alındı! (Semboliktir)');
    // Gerçek backup için: discord-backup gibi modüller kullanılır
  },
};
