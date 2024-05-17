const Sequelize = require('sequelize');
const { sequelize } = require('..');

module.exports = function(sequelize){
    return sequelize.define("users", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        name:{
            type: Sequelize.STRING(100),
        },
        birthdate:{
            type: Sequelize.DATEONLY,
        },
        phone_number:{
            type: Sequelize.STRING(45),
        },
        email:{
            type: Sequelize.STRING(45),
        },
        password:{
            type: Sequelize.STRING(45),
        },
    }, {
        timestamp: false,
        tableName: 'users',
    });
}
users.sync({ force: true })



// // Создайте подключение к базе данных
// const connection = sequelize.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'admin',
//   database: 'db'
// });

// // Подключитесь к базе данных
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to the database!');

//   // Введите данные в таблицу
//   let sequelize = "INSERT INTO users (name, birthdate, phone_number, email, password) VALUES ('Sam', '2003-11-15', '80296487894','test@gmail.com','123456')";
//   connection.query(sequelize, (err, result) => {
//     if (err) throw err;
//     console.log('Data inserted successfully!');
//   });

//   // Закройте подключение к базе данных
//   connection.end();
// });
