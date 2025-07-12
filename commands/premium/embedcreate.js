const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('embedcreate')
    .setDescription('Özel embed mesaj oluşturur.')
    .addStringOption(option =>
      option.setName('başlık').setDescription('Embed başlığı').setRequired(true))
    .addStringOption(option =>
      option.setName('açıklama').setDescription('Embed açıklaması').setRequired(true)),

  async execute(interaction) {
    const başlık = interaction.options.getString('başlık');
    const açıklama = interaction.options.getString('açıklama');

    const embed = new EmbedBuilder()
      .setTitle(başlık)
      .setDescription(açıklama)
      .setColor('Blurple');

    await interaction.reply({ embeds: [embed] });
  },
};
