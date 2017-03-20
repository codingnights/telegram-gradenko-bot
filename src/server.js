const Telegraf = require('telegraf');
const express = require('express');
const expressApp = express();

const API_TOKEN = process.env.TELEGRAMTOKEN || '';
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'https://telegram-gradenko-bot.herokuapp.com';

const bot = new Telegraf(API_TOKEN);
bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
expressApp.use(bot.webhookCallback(`/bot${API_TOKEN}`));

expressApp.get('/', (req, res) => {
//   res.send('Hello World!');
  
  res.command('start', (ctx) => {
    console.log('start', ctx.from)
    ctx.reply('Welcome!')
  })

  res.hears('hi', (ctx) => ctx.reply('WHAHAHAHAHAHAHA'))

  res.on('sticker', (ctx) => ctx.reply('KEKEKEKEKEKEKEKE'))

  res.startPolling() 
});

expressApp.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
