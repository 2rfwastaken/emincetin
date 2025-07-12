const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('modlog')
    .setDescription('Moderasyon log kanalını ayarlar.')
    .addChannelOption(option =>
      option.setName('kanal')
        .setDescription('Log kanalı')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)),

  async execute(interaction) {
    const kanal = interaction.options.getChannel('kanal');
    await interaction.reply(`📝 Moderasyon log kanalı ayarlandı: ${kanal}`);
  },
};
