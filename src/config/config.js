module.exports = {
    database: {
        username: process.env.DB_USERNAME || 'username',
        password: process.env.PASSWORD || 'password',
        database: process.env.DATABASE || 'database',
        host: process.env.HOST || '127.0.0.1',
        dialect: 'postgres'
    }
};
