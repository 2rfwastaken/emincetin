const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const commands = [];
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

// Tüm komutları topla
for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
      commands.push(command.data.toJSON());
    } else {
      console.warn(`[UYARI] Komut eksik: ${filePath}`);
    }
  }
}

// REST setup
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

// Slash komutları Discord'a yükle
(async () => {
  try {
    console.log(`🔃 ${commands.length} komut yükleniyor...`);
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands },
    );
    console.log('✅ Tüm komutlar başarıyla yüklendi!');
  } catch (error) {
    console.error('🚫 Yükleme sırasında hata:', error);
  }
})();
