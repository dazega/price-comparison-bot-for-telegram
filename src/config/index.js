const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const configs = {};

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js'
        );
    })
    .forEach(file => {
        const configFile = require(path.join(__dirname, file));
        const config = file.replace('.js', '');

        configs[config] = configFile;
    });

module.exports = configs;
