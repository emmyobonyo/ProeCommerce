import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admins User',
        email: 'example@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane User',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;