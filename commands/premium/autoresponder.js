const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('autoresponder')
    .setDescription('Yanıt verilecek kelime ve yanıt ekler.')
    .addStringOption(option =>
      option.setName('anahtar').setDescription('Yanıt tetikleyici kelime').setRequired(true))
    .addStringOption(option =>
      option.setName('yanit').setDescription('Botun vereceği yanıt').setRequired(true)),

  async execute(interaction) {
    const trigger = interaction.options.getString('anahtar');
    const response = interaction.options.getString('yanit');

    // Örnek kullanım: JSON’a yazmak gibi.
    await interaction.reply(`✅ "${trigger}" kelimesine otomatik yanıt ayarlandı: "${response}"`);
  },
};
