const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kullanıcıyı sunucudan atar.')
    .addUserOption(option =>
      option.setName('kullanıcı').setDescription('Atılacak kullanıcı').setRequired(true))
    .addStringOption(option =>
      option.setName('sebep').setDescription('Atılma sebebi').setRequired(false))
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

  async execute(interaction) {
    const user = interaction.options.getUser('kullanıcı');
    const reason = interaction.options.getString('sebep') || 'Sebep belirtilmedi.';
    const member = await interaction.guild.members.fetch(user.id).catch(() => null);

    if (!member || !member.kickable) {
      return interaction.reply({ content: 'Bu kullanıcı atılamıyor.', ephemeral: true });
    }

    await member.kick(reason);
    await interaction.reply(`${user.tag} sunucudan atıldı.\nSebep: ${reason}`);
  },
};
