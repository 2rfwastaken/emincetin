const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('volume')
    .setDescription('Ses seviyesini ayarlar.')
    .addIntegerOption(option =>
      option.setName('seviye').setDescription('0 ile 100 arası').setRequired(true)),

  async execute(interaction) {
    const queue = client.distube.getQueue(interaction);
    if (!queue) return interaction.reply({ content: 'Çalan müzik yok.', ephemeral: true });

    const volume = interaction.options.getInteger('seviye');
    if (volume < 0 || volume > 100) {
      return interaction.reply({ content: '0-100 arasında bir değer gir.', ephemeral: true });
    }

    queue.setVolume(volume);
    await interaction.reply(`🔊 Ses seviyesi ${volume}% olarak ayarlandı.`);
  },
};
