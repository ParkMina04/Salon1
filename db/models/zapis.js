const Sequelize = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define("zapis", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        zapisDate:{
            type: Sequelize.DATEONLY,
        },
        master:{
            type: Sequelize.STRING(100),
        },
        comment:{
            type: Sequelize.STRING(100),
        },
        poroda:{
            type: Sequelize.STRING(45),
        },
        servesis:{
            type: Sequelize.STRING(100),
        },
        name:{
            type: Sequelize.STRING(100),
        },
    }, {
        timestamp: false,
        tableName: 'zapis',
    });
}