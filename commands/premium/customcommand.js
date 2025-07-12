const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('customcommand')
    .setDescription('Sunucuya özel komut ekler.')
    .addStringOption(option =>
      option.setName('komut').setDescription('Komut adı').setRequired(true))
    .addStringOption(option =>
      option.setName('cevap').setDescription('Komut çıktısı').setRequired(true)),

  async execute(interaction) {
    const komut = interaction.options.getString('komut');
    const cevap = interaction.options.getString('cevap');

    // Not: Bu DB'ye yazılırsa kalıcı olur
    await interaction.reply(`✅ "/${komut}" komutu eklendi. Cevap: "${cevap}"`);
  },
};
