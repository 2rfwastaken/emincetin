const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('skip')
    .setDescription('Geçerli şarkıyı atlar.'),

  async execute(interaction) {
    const queue = client.distube.getQueue(interaction);
    if (!queue) return interaction.reply({ content: 'Çalan şarkı yok.', ephemeral: true });

    await queue.skip();
    await interaction.reply('⏭️ Şarkı atlandı.');
  },
};
