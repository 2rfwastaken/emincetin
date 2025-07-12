const { SlashCommandBuilder } = require('discord.js');
const translate = require('@vitalets/google-translate-api');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('translate')
    .setDescription('Metni belirtilen dile çevirir.')
    .addStringOption(option =>
      option.setName('dil').setDescription('Hedef dil (örnek: en, tr, de)').setRequired(true))
    .addStringOption(option =>
      option.setName('metin').setDescription('Çevrilecek metin').setRequired(true)),

  async execute(interaction) {
    const dil = interaction.options.getString('dil');
    const metin = interaction.options.getString('metin');

    try {
      const sonuc = await translate(metin, { to: dil });
      await interaction.reply(`📤 Orijinal: ${metin}\n📥 Çeviri (${dil}): ${sonuc.text}`);
    } catch (err) {
      console.error(err);
      await interaction.reply({ content: 'Çeviri başarısız oldu.', ephemeral: true });
    }
  },
};
