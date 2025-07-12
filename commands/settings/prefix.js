const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('prefix')
    .setDescription('Botun ön ekini (prefix) değiştirir.')
    .addStringOption(option =>
      option.setName('yeni').setDescription('Yeni prefix').setRequired(true)),

  async execute(interaction) {
    const yeni = interaction.options.getString('yeni');
    await interaction.reply(`✅ Yeni prefix: \`${yeni}\`\n(Not: Slash komutları için etkili değildir.)`);
  },
};
