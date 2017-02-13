var SlackBots = require('slackbots')
var request = require('request')


var bot = new SlackBot({
    token: process.env.TOKEN ,
    name: 'General Stavoros'
});