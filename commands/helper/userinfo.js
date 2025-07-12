const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Kullanıcı hakkında bilgi gösterir.')
    .addUserOption(option =>
      option.setName('kullanıcı').setDescription('Kimin bilgisi?').setRequired(false)),

  async execute(interaction) {
    const user = interaction.options.getUser('kullanıcı') || interaction.user;
    const member = await interaction.guild.members.fetch(user.id);

    const embed = new EmbedBuilder()
      .setTitle(`${user.tag}`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: '🆔 ID', value: user.id, inline: true },
        { name: '🚀 Katılım Tarihi', value: `<t:${parseInt(member.joinedTimestamp / 1000)}:D>`, inline: true },
        { name: '📆 Hesap Oluşturma', value: `<t:${parseInt(user.createdTimestamp / 1000)}:D>`, inline: false }
      )
      .setColor('Green');

    await interaction.reply({ embeds: [embed] });
  },
};
