const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('playlist')
    .setDescription('Hazır bir oynatma listesini çalar.'),

  async execute(interaction) {
    const voiceChannel = interaction.member.voice.channel;
    if (!voiceChannel) return interaction.reply({ content: 'Ses kanalında olmalısın.', ephemeral: true });

    const url = 'https://www.youtube.com/playlist?list=PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj';
    await interaction.reply('🎶 Oynatma listesi yükleniyor...');
    client.distube.play(voiceChannel, url, {
      textChannel: interaction.channel,
      member: interaction.member
    });
  },
};
