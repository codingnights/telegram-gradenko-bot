/*
 * Main dialog
 */
const {Extra, Markup} = require('telegraf');

module.exports = function (bot) {
    bot.command('start', (ctx) => {
        ctx.reply('Hi there')
    });

    bot.command('onetime', (ctx) => {
        return ctx.reply('One time keyboard', Markup
            .keyboard([
                '/simple',
                '/inline',
                '/pyramid'
            ])
            .oneTime()
            .resize()
            .extra()
        )
    });

    bot.command('custom', (ctx) => {
        return ctx.reply('Custom buttons keyboard', Markup
            .keyboard([
                ['🔍 Search', '😎 Popular'],         // Row1 with 2 button
                ['☸ Setting', '📞 Feedback'],       // Row2 with 2 button
                ['📢 Ads', '⭐️ Rate us', '👥 Share'] // Row3 with 3 button
            ])
            .oneTime()
            .resize()
            .extra()
        )
    });

    bot.command('special', (ctx) => {
        return ctx.reply('Special buttons keyboard', Extra.markup((markup) => {
                return markup.resize()
                    .keyboard([
                        markup.contactRequestButton('Send contact'),
                        markup.locationRequestButton('Send location')
                    ])
        }))
    });

    bot.command('pyramid', (ctx) => {
        return ctx.reply('Keyboard wrap', Extra.markup(
            Markup.keyboard(['one', 'two', 'three', 'four', 'five', 'six'], {
                    wrap: (btn, index, currentRow) => currentRow.length >= (index + 1) / 2
            })
        ))
    });

    bot.command('simple', (ctx) => {
        return ctx.replyWithHTML('<b>Tabs</b> or <i>Spaces?</i>', Extra.markup(
            Markup.keyboard(['Tabs', 'Spaces'])
        ))
    });

    bot.command('inline', (ctx) => {
        return ctx.reply('<b>Tabs</b> or <i>Spaces?</i>', Extra.HTML().markup((m) =>
            m.inlineKeyboard([
                m.callbackButton('Tabs', 'Tabs'),
                m.callbackButton('Spaces', 'Spaces')
            ])))
    });

    bot.command('random', (ctx) => {
        return ctx.reply('random example',
            Markup.inlineKeyboard([
                Markup.callbackButton('Tabs', 'Tabs'),
                Markup.callbackButton('42', '42', Math.random() > 0.5),
                Markup.callbackButton('Spaces', 'Spaces')
            ]).extra()
        )
    });

    bot.hears(/\/wrap (\d+)/, (ctx) => {
        return ctx.reply('Keyboard wrap', Extra.markup(
            Markup.keyboard(['one', 'two', 'three', 'four', 'five', 'six'], {
                columns: parseInt(ctx.match[1])
            })
        ))
    });

    bot.action('42', (ctx, next) => {
        return ctx.reply('👍').then(next)
    });

    bot.action(/.+/, (ctx) => {
        return ctx.answerCallbackQuery(`Oh, ${ctx.match[0]}! Nice`)
    });

    // bot.startPolling()
};
