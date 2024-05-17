const Sequelize = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define("photoes", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        photo:{
            type: Sequelize.BLOB,
        },
    }, {
        timestamp: false,
        tableName: 'photoes',
    });
}