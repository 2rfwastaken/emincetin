const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('autorole')
    .setDescription('Yeni gelen üyelere otomatik rol verir.')
    .addRoleOption(option =>
      option.setName('rol')
        .setDescription('Verilecek rol')
        .setRequired(true)),

  async execute(interaction) {
    const rol = interaction.options.getRole('rol');
    await interaction.reply(`🔁 Artık yeni gelenlere şu rol verilecek: ${rol}`);
  },
};
