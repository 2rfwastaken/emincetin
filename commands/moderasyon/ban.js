const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Belirtilen kullanıcıyı sunucudan banlar.')
    .addUserOption(option =>
      option.setName('kullanıcı').setDescription('Banlanacak kullanıcı').setRequired(true))
    .addStringOption(option =>
      option.setName('sebep').setDescription('Ban sebebi').setRequired(false))
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

  async execute(interaction) {
    const user = interaction.options.getUser('kullanıcı');
    const reason = interaction.options.getString('sebep') || 'Sebep belirtilmedi.';
    const member = await interaction.guild.members.fetch(user.id).catch(() => null);

    if (!member || !member.bannable) {
      return interaction.reply({ content: 'Bu kullanıcı banlanamıyor.', ephemeral: true });
    }

    await member.ban({ reason });
    await interaction.reply(`${user.tag} başarıyla banlandı.\nSebep: ${reason}`);
  },
};
