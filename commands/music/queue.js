const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('queue')
    .setDescription('Geçerli sırayı gösterir.'),

  async execute(interaction) {
    const queue = client.distube.getQueue(interaction);
    if (!queue) return interaction.reply({ content: 'Sırada hiçbir şey yok.', ephemeral: true });

    const q = queue.songs.map((s, i) => `${i + 1}. ${s.name}`).join('\n');
    await interaction.reply(`🎶 **Müzik Sırası:**\n${q}`);
  },
};
