const { Telegraf } = require('telegraf');
const { telegram } = require('./config');

module.exports = new Telegraf(telegram.apiKey);
