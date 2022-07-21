import { PostgresDB } from '.';
import { Transaction } from '../../../models/';

class TransactionsTable extends PostgresDB {
    public async deposit (transaction: Transaction): Promise<any> {
        try {
            this.client.connect();

            const text = `INSERT INTO transactions (
                id,
                date,
                value,
                type,
                destination_account_id
            ) VALUES (
                $1,
                $2,
                $3,
                $4,
                $5
            ) RETURNING *`;
                
            const values = [
                transaction.id,
                transaction.date,
                transaction.value,
                transaction.type,
            ];
            
            const result = await this.client.query(text, values);
            this.client.end();
            
            if(result.rows.length !== 0) {
                console.log('deposit: '+ result.rows);
                return result.rows;
            }
            
            return false;
        } catch (error) {
            this.client.end();
            throw new Error('503: service temporarily unavailable');
        }
    }
    
    public async withdraw (transaction: Transaction): Promise<any> {
        try {
            this.client.connect();
            
            const text = `INSERT INTO transactions (
                id,
                date,
                value,
                type,
                origin_account_id
            ) VALUES (
                $1,
                $2,
                $3,
                $4,
                $5
            ) RETURNING *`;

            const values = [
                transaction.id,
                transaction.date,
                transaction.value,
                transaction.type,
                transaction.origin_account_id
            ];
                    
            const result = await this.client.query(text, values);
            this.client.end();
                    
                    
            if(result.rows.length !== 0) {
                console.log('withdraw: '+ result.rows);
                return result.rows;
            }
                
            return false;
        } catch (error) {
            this.client.end();
            throw new Error('503: service temporarily unavailable');
        }
    }
        
    public async transfer (transaction: Transaction): Promise<any> {
        try {
            this.client.connect();
            
            const text = `INSERT INTO transactions (
                id,
                date,
                value,
                type,
                origin_account_id,
                destination_account_id
            ) VALUES (
                $1,
                $2,
                $3,
                $4,
                $5,
                $6
            ) RETURNING *`;

            const values = [
                transaction.id,
                transaction.date,
                transaction.value,
                transaction.type,
                transaction.origin_account_id,
                transaction.destination_account_id
            ];
                
            const result = await this.client.query(text, values);
            this.client.end();

            if(result.rows.length !== 0) {
                console.log('transfer: ' + result.rows);
                return result.rows;
            }

            return false;
        } catch (error) {
            this.client.end();
            throw new Error('503: service temporarily unavailable');
        }
    }

    public async get (id: string): Promise<any> {
        try {
            this.client.connect();

            const text = `SELECT * FROM transactions WHERE origin_account_id = $1 OR destination_account_id = $1`;
            const values = [id];

            const result = await this.client.query(text, values);
            this.client.end();

            if(result.rows.length !== 0) {
                console.log('get transactions: ' + result.rows);
                return result.rows;
            }

            return false;
        } catch (error) {
            this.client.end();
            throw new Error('503: service temporarily unavailable');
        }
    }
}

export { TransactionsTable };

/* public async deposit (transaction: Transaction): Promise<any> {
    try {
        this.client.connect();

        const text = ``;
        const values = [
            transaction.id,
            transaction.date,
            transaction.value,
            transaction.type,
            transaction.origin_account_id,
            transaction.destination_account_id
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
} */