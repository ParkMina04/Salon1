const Sequelize = require('sequelize');
const db = require('./db');
const users = db.users;
const zapis = db.zapis;
const masters = db.masrters;
const news = db.news;
const otzivi = db.otzivi;
const photoes = db.photoes;
const servesis = db.servesis;

// const jane = await User.create({
//     name: 'JaneDoe',
//     birthdate: new Date(2003, 11, 15),
// });
// users = await User.findAll();

function t01() {
    users.findAll().then(result => {
        console.log(result);
    })
}
//t01();

async function t02(){
    const result = await users.findAll();
    alert(result);
}
t02();

// app.post('./db/models/users', async (req, res) => {
//     const { id, name, birthdate, phone_number, email, password } = req.body;
//     try {
//       const users = await users.create({ id, name, birthdate, phone_number, email, password });
//       res.json(users);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'An error occurred while trying to create a user' });
//     }
// });




//     const UserName = document.getElementById('UserName').value;
//     const Birthdate = document.getElementById('Birthdate').value;
//     const phone = document.getElementById('phone').value;
//     const Email = document.getElementById('Email').value;
//     const Password = document.getElementById('Password').value;
//     const button = querySelector('#reg');

// const newUser = User.build({
//          /* Здесь укажите значения атрибутов */ 
// });
//     newUser.save()
//       .then(() => console.log('Новый пользователь успешно сохранен'))
//       .catch((error) => console.log('Ошибка при сохранении нового пользователя:', error));

    // const callback = () => {
    //     console.log("Регистрация прошла успешно");
    // }
    // button.addEventListener('click', callback);
    // console.log(UserName);
// users.create({
//     name: UserName,
//     birthdate: Birthdate,
//     phone_number: phone,
//     email: Email,
//     password: Password,
// }).then(res=>{
//     const users = {id: res.id, birthdate: res.Birthdate, phone_number: res.phone, email: res.Email, password: res.Password}
//     document.getElementById('reg').addEventListener('click')(console.log("Вы зарегистрировались"));
// })
// function inp(){
    

//     // const users = {name: UserName.name, birthdate: Birthdate.birthdate, phone_number: phone.phone_number, email: Email.email, password: Password.password}

//     if(UserName!=0, Birthdate!=0, phone!=0, Email!=0, Password!=0){
//         const users = {name: UserName.name, birthdate: Birthdate.birthdate, phone_number: phone.phone_number, email: Email.email, password: Password.password}
//         alert("Вы зарегистрированны");
//     }else{
//         alert("Регистрация не прошла");
//     };
// };