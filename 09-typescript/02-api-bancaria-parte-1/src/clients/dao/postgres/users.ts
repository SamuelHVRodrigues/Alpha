import { PostgresDB } from '.';
import { User } from '../../../models';

class UsersTable extends PostgresDB {
    public async insert (user: User): Promise<any> {
        try {
            this.client.connect();

            const text = `
            INSERT INTO users (
                id,
                name,
                email,
                cpf,
                birthdate
            ) VALUES (
                $1,
                $2,
                $3,
                $4,
                $5
            ) RETURNING name, email, cpf, birthdate`;

            const values = [
                user.id,
                user.name,
                user.email,
                user.cpf,
                user.birthdate
            ];
            
            const result = await this.client.query(text, values);

            this.client.end();
            
            if (result.rows.length !== 0) {
                console.log('result.rows');
                console.log(result.rows);
                return result.rows;
            }
            
            return false;
        } catch (error) {
            this.client.end();
            throw new Error('503: service temporarily unavailable');
        }
    }

    public async find (cpf: string): Promise<any> {
        try {
            this.client.connect();

            const text = `SELECT * FROM users WHERE cpf = $1`;
            const value = [cpf];

            const result = await this.client.query(text, value);
            this.client.end();

            if(result.rows.length !== 0) {
                return result.rows;
            }

            return false;
        } catch (error) {
            this.client.end();
            throw new Error('503: service temporarily unavailable');
        }
    }
}

export { UsersTable };
