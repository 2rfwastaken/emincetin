const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Kullanıcının avatarını gösterir.')
    .addUserOption(option =>
      option.setName('kullanıcı').setDescription('Avatarı gösterilecek kişi').setRequired(false)),

  async execute(interaction) {
    const user = interaction.options.getUser('kullanıcı') || interaction.user;

    const embed = new EmbedBuilder()
      .setTitle(`${user.username}'ın Avatarı`)
      .setImage(user.displayAvatarURL({ size: 4096, dynamic: true }))
      .setColor('Random');

    await interaction.reply({ embeds: [embed] });
  },
};
