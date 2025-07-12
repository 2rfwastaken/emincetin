const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Şarkı çalar.')
    .addStringOption(option =>
      option.setName('şarkı').setDescription('URL ya da isim').setRequired(true)),

  async execute(interaction) {
    const voiceChannel = interaction.member.voice.channel;
    if (!voiceChannel) {
      return interaction.reply({ content: 'Ses kanalında olman lazım!', ephemeral: true });
    }

    const song = interaction.options.getString('şarkı');
    await interaction.reply(`🎧 \`${song}\` aranıyor...`);
    client.distube.play(voiceChannel, song, {
      textChannel: interaction.channel,
      member: interaction.member
    });
  },
};
