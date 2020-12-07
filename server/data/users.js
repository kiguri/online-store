const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'huyha',
        email: 'huyha@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'kiguri',
        email: 'kiguri@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

module.exports = users;
