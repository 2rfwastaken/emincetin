const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setup')
    .setDescription('Çöpvex ayarlarını yapılandırır.'),

  async execute(interaction) {
    await interaction.reply('🛠️ Setup sihirbazı başlatıldı! (Görsel bir arayüz henüz yok ama yakında gelir 😄)');
  },
};
