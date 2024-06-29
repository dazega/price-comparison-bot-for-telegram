require('dotenv').config();

const { Telegraf } = require('telegraf');
const { telegram } = require('./config/config');

const bot = new Telegraf(telegram.apiKey)

bot.start((ctx) => {
    const {
        first_name: firstName = '',
        last_name: lastName = ''
    } = ctx.from;
    ctx.reply(`Bienvenido ${firstName} ${lastName}`);
});

bot.command('buscar', (ctx) => {
    const { payload: product } = ctx;
    if (!product.length) {
        return ctx.reply('Producto invalido!\nPor favor introduce un producto valido')
    }
    console.log('ctx', typeof ctx.payload)
});

bot.command('suscribir', (ctx) => {
    ctx.reply('Estas suscribiendo');
});

bot.launch();

