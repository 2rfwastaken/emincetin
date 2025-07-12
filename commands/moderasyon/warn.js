const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('warn')
    .setDescription('Bir kullanıcıyı uyarır.')
    .addUserOption(option =>
      option.setName('kullanıcı').setDescription('Uyarılacak kişi').setRequired(true))
    .addStringOption(option =>
      option.setName('sebep').setDescription('Uyarı sebebi').setRequired(false))
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),

  async execute(interaction) {
    const user = interaction.options.getUser('kullanıcı');
    const sebep = interaction.options.getString('sebep') || 'Sebep belirtilmedi.';

    await interaction.reply(`${user.tag} uyarıldı.\nSebep: ${sebep}`);
    // İsteğe bağlı: DB’ye uyarı kaydı eklenebilir.
  },
};
