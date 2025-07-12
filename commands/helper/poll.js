const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('poll')
    .setDescription('Oylama başlatır.')
    .addStringOption(option =>
      option.setName('soru').setDescription('Anket sorusu').setRequired(true)),

  async execute(interaction) {
    const soru = interaction.options.getString('soru');

    const embed = new EmbedBuilder()
      .setTitle('🗳️ Anket')
      .setDescription(soru)
      .setColor('Orange')
      .setFooter({ text: `Başlatan: ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() });

    const mesaj = await interaction.reply({ embeds: [embed], fetchReply: true });
    await mesaj.react('👍');
    await mesaj.react('👎');
  },
};
