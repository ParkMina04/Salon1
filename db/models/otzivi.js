const Sequelize = require('sequelize');
const { text } = require('stream/consumers');

module.exports = function(sequelize){
    return sequelize.define("otzivi", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        name:{
            type: Sequelize.STRING(100),
        },
        text:{
            type: Sequelize.STRING(999),
        },
    }, {
        timestamp: false,
        tableName: 'otzivi',
    });
}