const Sequelize = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define("masters", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        master:{
            type: Sequelize.STRING(100),
        },
        discribe:{
            type: Sequelize.STRING(999),
        },
    }, {
        timestamp: false,
        tableName: 'masters',
    });
}