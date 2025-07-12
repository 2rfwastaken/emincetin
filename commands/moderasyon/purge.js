const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('purge')
    .setDescription('Belirtilen miktarda mesajı siler.')
    .addIntegerOption(option =>
      option.setName('miktar').setDescription('Silinecek mesaj sayısı (1-100)').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

  async execute(interaction) {
    const miktar = interaction.options.getInteger('miktar');
    if (miktar < 1 || miktar > 100) {
      return interaction.reply({ content: '1 ile 100 arasında bir sayı gir.', ephemeral: true });
    }

    await interaction.channel.bulkDelete(miktar, true);
    await interaction.reply({ content: `${miktar} mesaj silindi.`, ephemeral: true });
  },
};
