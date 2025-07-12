const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('autoplay')
    .setDescription('Müzik otomatik devam etsin mi?')
    .addBooleanOption(option =>
      option.setName('durum').setDescription('Aç/Kapat').setRequired(true)),

  async execute(interaction) {
    const durum = interaction.options.getBoolean('durum');
    const queue = client.distube.getQueue(interaction);
    if (!queue) return interaction.reply({ content: 'Müzik çalmıyor.', ephemeral: true });

    queue.autoplay = durum;
    await interaction.reply(`🎶 Autoplay modu ${durum ? 'açıldı' : 'kapatıldı'}.`);
  },
};
