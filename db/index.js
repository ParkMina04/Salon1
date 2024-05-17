const Sequelize = require('sequelize');

const sequelize = new Sequelize("db", "root", "admin",{
    dialect: "mysql",
    host: '127.0.0.1',
    logging: false
});

const users = require('./models/users')(sequelize);
const zapis = require('./models/zapis')(sequelize);
const masters = require('./models/masters')(sequelize);
const news = require('./models/news')(sequelize);
const otzivi = require('./models/otzivi')(sequelize);
const photoes = require('./models/photoes')(sequelize);
const servesis = require('./models/servesis')(sequelize);

module.exports = {
    sequelize : sequelize,
    users : users,
    zapis : zapis,
    masters : masters,
    news : news,
    otzivi : otzivi,
    photoes : photoes,
    servesis : servesis,
}




// const connection = Sequelize.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     database: 'db',
//     password: 'admin'
// });
// const sql = `INSERT INTO users(name, birthdate, phone_number, email, pssword) VALUES('Sam', 2003-11-15, 80298741234, test@gmail.com, 123456)`;
// connection.query(sql, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });
// connection.end();