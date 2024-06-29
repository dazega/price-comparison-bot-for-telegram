const { bot, db } = require('../config/')
const { connectDB } = db;
const { start, subscription } = require('./commands');

bot.start(start);

bot.command('buscar', (ctx) => {
    const { payload: product } = ctx;
    if (!product.length) {
        return ctx.reply('Producto invalido!\nPor favor introduce un producto valido')
    }
    console.log('ctx', typeof ctx.payload)
});

bot.command('suscribir', subscription);

(async () => {
    await connectDB();
    await bot.launch();
})();
