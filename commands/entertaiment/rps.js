const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rps')
    .setDescription('Taş, Kağıt, Makas oyunu oyna!')
    .addStringOption(option =>
      option.setName('seçim')
        .setDescription('Seçimini yap')
        .addChoices(
          { name: 'Taş', value: 'taş' },
          { name: 'Kağıt', value: 'kağıt' },
          { name: 'Makas', value: 'makas' }
        )
        .setRequired(true)),

  async execute(interaction) {
    const userChoice = interaction.options.getString('seçim');
    const choices = ['taş', 'kağıt', 'makas'];
    const botChoice = choices[Math.floor(Math.random() * 3)];

    let result;
    if (userChoice === botChoice) result = 'Berabere!';
    else if (
      (userChoice === 'taş' && botChoice === 'makas') ||
      (userChoice === 'kağıt' && botChoice === 'taş') ||
      (userChoice === 'makas' && botChoice === 'kağıt')
    ) result = 'Kazandın!';
    else result = 'Kaybettin!';

    await interaction.reply(`Sen: **${userChoice}**\nBen: **${botChoice}**\n🧠 ${result}`);
  },
};
