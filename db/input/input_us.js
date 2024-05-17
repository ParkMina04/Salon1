const jane= await User.create({
    name: 'Jone',
    birthdate: new Date(2003,11,12),
});
const users = await User.findAll();