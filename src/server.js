const TelegramBot = require('telegraf')
const express = require('express');
const expressApp = express();
const request = require('request')

const API_TOKEN = process.env.TELEGRAMTOKEN || '';
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'https://telegram-gradenko-bot.herokuapp.com';

const botTelegram = new Telegraf(API_TOKEN);
bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
expressApp.use(bot.webhookCallback(`/bot${API_TOKEN}`));


botTelegram.command('start', (ctx) => {
  console.log('start', ctx.from)
  ctx.reply('Welcome!')
})

botTelegram.hears('hi', (ctx) => ctx.reply('WHAHAHAHAHAHAHA'))

botTelegram.on('sticker', (ctx) => ctx.reply('KEKEKEKEKEKEKEKE'))

botTelegram.startPolling()
