import { PostgresDB } from '.';
import { Account } from '../../../models';

class Balance extends PostgresDB {
    public async get (account: Account): Promise<any> {
        try {
            this.client.connect();

            const text = `SELECT balance FROM accounts WHERE cpf = $1`;
            const values = [account.id];

            const result = await this.client.query(text, values);
            this.client.end();

            if(result.rows.length !== 0) {
                console.log('get balance: ' + result.rows);
                return result.rows;
            }
            
            return false;
        } catch (error) {
            this.client.end();
            throw new Error('503: service temporarily unavailable');
        }
    }
    
    public async update (account: Account): Promise<any> {
        try {
            this.client.connect();
            
            const text = `UPDATE accounts
            SET balance = $1
            WHERE
                agency_number = $2,
                agency_check_digit = $3,
                account_number = $4,
                account_check_digit =$5
            RETURNING *`;
            
            const values = [account.agency_number, account.agency_check_digit, account.account_number, account.account_check_digit];
            
            const result = await this.client.query(text, values);
            this.client.end();
            
            if(result.rows.length !== 0) {
                console.log('update balance: ' + result.rows);
                return result.rows;
            }

            return false;
        } catch (error) {
            this.client.end();
            throw new Error('503: service temporarily unavailable');
        }
    }
}

export { Balance };
