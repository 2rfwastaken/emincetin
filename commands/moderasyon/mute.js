const { SlashCommandBuilder, PermissionFlagsBits, time } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mute')
    .setDescription('Bir kullanıcıya timeout uygular.')
    .addUserOption(option =>
      option.setName('kullanıcı').setDescription('Susturulacak kullanıcı').setRequired(true))
    .addStringOption(option =>
      option.setName('süre').setDescription('Süre (örnek: 5m, 1h, 1d)').setRequired(true))
    .addStringOption(option =>
      option.setName('sebep').setDescription('Sebep').setRequired(false))
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),

  async execute(interaction) {
    const user = interaction.options.getUser('kullanıcı');
    const member = await interaction.guild.members.fetch(user.id);
    const süre = interaction.options.getString('süre');
    const sebep = interaction.options.getString('sebep') || 'Sebep belirtilmedi.';

    const zaman = require('ms')(süre);
    if (!zaman || zaman > 2419200000) return interaction.reply({
      content: 'Geçerli bir süre gir (en fazla 28 gün)',
      ephemeral: true
    });

    await member.timeout(zaman, sebep);
    await interaction.reply(`${user.tag} ${süre} boyunca susturuldu.\nSebep: ${sebep}`);
  },
};
