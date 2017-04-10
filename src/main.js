/*
 * Main dialog
 */
const {Extra, Markup} = require('telegraf');

module.exports = function (bot) {
    bot.command('help', (ctx) => {
    	ctx.reply('Available commands')
		ctx.reply('`/start` Starts the process ')
    });

	bot.command('start', (ctx) => {
		ctx.reply('Starting a new process')
		ctx.reply('Please send me the picture')

		botTelegram.on('photo', (ctx) => {
			ctx.reply('Analyzing')
		})
    });
};
