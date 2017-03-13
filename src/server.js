var SlackBots = require('slackbots')
var TelegramBot = require('telegraf')
var request = require('request')

var botSlack = new SlackBots({
    token: process.env.SLACKTOKEN ,
    name: 'General Stavoros'
});

var botTelegram = new TelegramBot(process.env.TELEGRAMTOKEN);

botTelegram.command('start', (ctx) => {
  console.log('start', ctx.from)
  ctx.reply('Welcome!')
})

botTelegram.hears('hi', (ctx) => ctx.reply('WHAHAHAHAHAHAHA'))

botTelegram.on('sticker', (ctx) => ctx.reply('KEKEKEKEKEKEKEKE'))

botTelegram.startPolling()