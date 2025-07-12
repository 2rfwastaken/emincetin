const { SlashCommandBuilder } = require('discord.js');
const ms = require('ms');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('remind')
    .setDescription('Belirli bir süre sonra hatırlatma gönderir.')
    .addStringOption(option =>
      option.setName('zaman').setDescription('Hatırlatma süresi (örnek: 10m, 1h)').setRequired(true))
    .addStringOption(option =>
      option.setName('mesaj').setDescription('Hatırlatma mesajı').setRequired(true)),

  async execute(interaction) {
    const zaman = interaction.options.getString('zaman');
    const mesaj = interaction.options.getString('mesaj');
    const süre = ms(zaman);

    if (!süre || süre > 604800000) { // 7 gün limiti
      return interaction.reply({ content: 'Geçerli bir zaman gir (max 7 gün)', ephemeral: true });
    }

    await interaction.reply(`⏰ Hatırlatma ayarlandı! Mesaj: **${mesaj}** - Süre: **${zaman}**`);

    setTimeout(() => {
      interaction.user.send(`🔔 Hatırlatma: ${mesaj}`);
    }, süre);
  },
};
