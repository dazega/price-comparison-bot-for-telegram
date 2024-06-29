const start = (ctx) => {
    const {
        first_name: firstName = '',
        last_name: lastName = ''
    } = ctx.from;
    ctx.reply(`Bienvenido ${firstName} ${lastName}, con este bot podrás buscar tus productos favoritos con los mejores precios.
        Tengo los siguientes comandos disponibles:
        \\buscar <producto>: con este comando te mostraré una descripción de tu producto como también en donde lo puedes encontrar
        \\suscribir <producto> <precio>: con este comando te podrás estar recibiendo notificaciones cuando el producto buscado se encuentre con un precio menor`);
}

module.exports = start;