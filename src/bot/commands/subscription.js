const Subscription = require('../../models/subscription');
const subscription = async (ctx) => {
    try{
        if (ctx.args.length < 2) {
            return ctx.reply('Por favor introduce una suscripción valida con el formato: /suscribir <producto> <precio>');
        }
        const [product, price] = ctx.args;
        const { chat: { id: chatId } } = ctx;
        const query = {
            where: {
                chatId: chatId.toString(),
                product
            }
        };
        const oldSubscription = await Subscription.findOne(query);

        if (oldSubscription) {
            return ctx.reply('Ya existe una suscripción con este producto');
        }
    
        const newSubscription = await Subscription.create({
            chatId: chatId.toString(),
            product,
            price: parseFloat(price)
        });

        return ctx.reply(`Suscripción creada éxitosamente. Puedes ver el detalle de tu suscripción con el siguiente id: ${newSubscription.id}`)
    } catch(error) {
        console.log(error);
        return ctx.reply('Error al crear la suscripción, intentalo más tarde');
    }
};

module.exports = subscription;
