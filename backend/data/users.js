const bcrypt = require('bcryptjs')
const Users = [
    {
        name: 'Nikita Chauhan',
        email: 'nikitachauhan5499@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Karan Mandal',
        email: 'krmandal9@gmail.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: false
    },
    {
        name: 'admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('12356', 10),
        isAdmin: true
    }
];

module.exports = Users;