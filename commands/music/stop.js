const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Müziği durdurur ve çıkartır.'),

  async execute(interaction) {
    const queue = client.distube.getQueue(interaction);
    if (!queue) return interaction.reply({ content: 'Şu anda çalan bir şey yok.', ephemeral: true });

    queue.stop();
    await interaction.reply('🛑 Müzik durduruldu.');
  },
};
