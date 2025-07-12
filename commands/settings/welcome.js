const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('welcome')
    .setDescription('Hoş geldin mesajı kanalını ayarlar.')
    .addChannelOption(option =>
      option.setName('kanal')
        .setDescription('Hoş geldin mesajlarının gideceği kanal')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)),

  async execute(interaction) {
    const kanal = interaction.options.getChannel('kanal');
    await interaction.reply(`👋 Hoş geldin mesajı kanalı ayarlandı: ${kanal}`);
  },
};
