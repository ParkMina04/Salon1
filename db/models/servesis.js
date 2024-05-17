const Sequelize = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define("servesis", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        name:{
            type: Sequelize.STRING(100),
        },
        price:{
            type: Sequelize.STRING(45),
        },
        discribe:{
            type: Sequelize.STRING(999),
        },
    }, {
        timestamp: false,
        tableName: 'servesis',
    });
}