const Sequelize = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define("news", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        newsName:{
            type: Sequelize.STRING(100),
        },
        new:{
            type: Sequelize.STRING(999),
        },
        photo:{
            type: Sequelize.BLOB,
        },
    }, {
        timestamp: false,
        tableName: 'news',
    });
}