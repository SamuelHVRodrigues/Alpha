import { Client } from 'pg';
import { User } from '../../../models/user';

const client = new Client(process.env.DATABASE_URL);
client.connect();

const values = ['152a09-9c81-4d0b-a45', 'Samuel Rodrigues', 'samuelhvrodrigues@gmail.com', '123.456.789-01', '01-01-2000'];

// client.query(text, values, (err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res.rows[0]);
//     }
// });

const insert = (user: User) => {
    try {
        client.connect();
        const text = 'SELECT * FROM public.users';
        // const text = 'INSERT INTO users(id, name, email, cpf, birthdate) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        // const result = client.query(text, [ user.id, user.name, user.email, user.cpf, user.birthdate ]);
        client.end();

        // return result;
    } catch(error) {
        client.end();
        throw new Error('503: a casa caiu');
    }
}

// try {
//     const res = await client.query(text, values);
//     console.log(res.rows[0]);
// } catch (err) {
//     console.log(err)
// }