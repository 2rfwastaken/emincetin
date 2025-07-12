const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('trivia')
    .setDescription('Rastgele bilgi sorusu gönderir.'),

  async execute(interaction) {
    const res = await axios.get('https://opentdb.com/api.php?amount=1&type=multiple');
    const soru = res.data.results[0];

    const options = [...soru.incorrect_answers, soru.correct_answer].sort(() => Math.random() - 0.5);

    await interaction.reply({
      content: `❓ **${soru.question.replace(/&quot;|&#039;/g, "'")}**\n\n${options.map((opt, i) => `**${i + 1}.** ${opt}`).join('\n')}\n\n*Doğru cevap: ${soru.correct_answer}*`,
    });
  },
};
