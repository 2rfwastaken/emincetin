const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('meme')
    .setDescription('Rastgele bir meme gönderir.'),

  async execute(interaction) {
    const res = await axios.get('https://meme-api.com/gimme');
    const meme = res.data;

    const embed = new EmbedBuilder()
      .setTitle(meme.title)
      .setImage(meme.url)
      .setURL(meme.postLink)
      .setFooter({ text: `Kaynak: ${meme.subreddit}` });

    await interaction.reply({ embeds: [embed] });
  },
};
