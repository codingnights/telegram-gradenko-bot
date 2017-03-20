const Telegraf = require('telegraf');

const TELEGRAMTOKEN = process.env.TELEGRAMTOKEN || '';
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || '';

const bot = new Telegraf(TELEGRAMTOKEN);
// Set webhook
bot.telegram.setWebhook(URL.concat('/secret-path'));


// Start https webhook
bot.startWebhook('/secret-path', null, PORT)

bot.command('start', (ctx) => {
  console.log('start', ctx.from)
  ctx.reply('Welcome!')
})

bot.hears('hi', (ctx) => ctx.reply('WHAHAHAHAHAHAHA'))

bot.on('text', (ctx) => ctx.reply('Hey there!'))

bot.on('sticker', (ctx) => ctx.reply('KEKEKEKEKEKEKEKE'))

bot.startPolling() 
