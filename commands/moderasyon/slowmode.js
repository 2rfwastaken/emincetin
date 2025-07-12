const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('slowmode')
    .setDescription('Kanala yavaş mod (slowmode) süresi uygular.')
    .addIntegerOption(option =>
      option.setName('süre').setDescription('Saniye cinsinden (0-21600)').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),

  async execute(interaction) {
    const süre = interaction.options.getInteger('süre');
    if (süre < 0 || süre > 21600) {
      return interaction.reply({ content: '0-21600 saniye arasında bir değer gir.', ephemeral: true });
    }

    await interaction.channel.setRateLimitPerUser(süre);
    await interaction.reply(`Yavaş mod süresi ${süre} saniye olarak ayarlandı.`);
  },
};
