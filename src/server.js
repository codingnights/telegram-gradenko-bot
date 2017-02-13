var SlackBots = require('slackbots')
var request = require('request')


var bot = new SlackBots({
    token: process.env.TOKEN ,
    name: 'General Stavoros'
});