import { PostgresDB } from '.';
import { Account } from '../../../models/';

class AccountsTable extends PostgresDB {
    public async insert (account: Account): Promise<any> {
        try {
            this.client.connect();

            const text = `
            INSERT INTO accounts (
                id,
                agency_number,
                agency_check_digit,
                account_number,
                account_check_digit,
                balance,
                user_id,
                account_password
            ) VALUES (
                $1,
                $2,
                $3,
                $4,
                $5,
                $6,
                $7,
                $8
            ) RETURNING agency_number, agency_check_digit, account_number, account_check_digit`;

            const values = [
                account.id,
                account.agency_number,
                account.agency_check_digit,
                account.account_number,
                account.account_check_digit,
                account.balance,
                account.user_id,
                account.account_password
            ];
            
            const result = await this.client.query(text, values);
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

    public async get (account: Account): Promise<any> {
        try {
            this.client.connect();

            const text = `SELECT balance FROM accounts WHERE
                agency_number = $1 AND
                agency_check_digit = $2 AND
                account_number = $3 AND
                account_check_digit =$4`;
            
            const values = [account.agency_number, account.agency_check_digit, account.account_number, account.account_check_digit];

            const result = await this.client.query(text, values);
            this.client.end();

            if(result.rows.length !== 0) {
                console.log('get account: ' + result.rows);
                return result.rows;
            }
            
            return false;
        } catch (error) {
            this.client.end();
            throw new Error('503: service temporarily unavailable');
        }
    }
}

export { AccountsTable };
