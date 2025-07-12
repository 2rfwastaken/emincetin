const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('8ball')
    .setDescription('Sihirli 8 top sorulara cevap verir.')
    .addStringOption(option =>
      option.setName('soru').setDescription('Sorunu yaz').setRequired(true)),

  async execute(interaction) {
    const responses = [
      'Kesinlikle evet.', 'Belki.', 'Emin değilim.', 'Hayır.', 'Hiç sanmıyorum.',
      'Tabii ki!', 'Daha sonra sor.', 'İmkansız görünüyor.', 'Şüpheli görünüyor.'
    ];

    const rastgele = responses[Math.floor(Math.random() * responses.length)];
    const soru = interaction.options.getString('soru');

    await interaction.reply(`🎱 **Soru:** ${soru}\n**Cevap:** ${rastgele}`);
  },
};
