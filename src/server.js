/*
 * Server of Telegram bot using Telegraf
 */
const Telegraf = require('telegraf');
const main = require('./main');

/*
 * Bot config
 */
const TELEGRAMTOKEN = process.env.TELEGRAMTOKEN || 'A';
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || '';

/*
 * Create bot
 */
const bot = new Telegraf(TELEGRAMTOKEN);
// Set webhook
bot.telegram.setWebhook(URL.concat('/secret-path'));
// Start https webhook
bot.startWebhook('/secret-path', null, PORT);

/*
 * Start bot with main dialog
 */
bot.use(Telegraf.log());
main(bot);
