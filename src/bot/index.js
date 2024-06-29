const { bot, db } = require('../config/')
const { connectDB, sequelize } = db;
const { start } = require('./commands');

bot.start(start);

bot.command('buscar', (ctx) => {
    const { payload: product } = ctx;
    if (!product.length) {
        return ctx.reply('Producto invalido!\nPor favor introduce un producto valido')
    }
    console.log('ctx', typeof ctx.payload)
});

bot.command('suscribir', (ctx) => {
    console.log('chat id', ctx.chat.id);
    console.log('ctx', ctx)
    ctx.reply('regresando un valor')
    ctx.reply('algo ' + ctx.chat.id)
});

(async () => {
    await connectDB();
    console.log('db connected')
    console.log('Sync db wait a moment...');
    // await sequelize.sync({ alter: true }).then(() => {
    //     console.log('✅Synced database successfully...');
    // });
    await bot.launch();
})();
