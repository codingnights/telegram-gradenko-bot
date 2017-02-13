var SlackBots = require('slackbots')
var request = require('request')
var secret = require('./secret.json')

var bot = new SlackBot({
    token: secret.token,
    name: 'General Stavoros'
});