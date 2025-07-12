const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Sunucu hakkında bilgileri gösterir.'),

  async execute(interaction) {
    const { guild } = interaction;

    const embed = new EmbedBuilder()
      .setTitle(guild.name)
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .addFields(
        { name: '👑 Sahip', value: `<@${guild.ownerId}>`, inline: true },
        { name: '👥 Üye Sayısı', value: `${guild.memberCount}`, inline: true },
        { name: '🆔 Sunucu ID', value: guild.id, inline: false },
        { name: '📆 Kuruluş Tarihi', value: `<t:${parseInt(guild.createdTimestamp / 1000)}:D>`, inline: false }
      )
      .setColor('Blue');

    await interaction.reply({ embeds: [embed] });
  },
};
