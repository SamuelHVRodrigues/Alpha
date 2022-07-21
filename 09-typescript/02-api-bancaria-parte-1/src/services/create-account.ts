import { AccountsTable } from '../clients/dao/postgres/accounts';
import { Account, APIResponse } from '../models';
import { ExceptionTreatment, RandomGenerator } from '../utils';
import { AccountDataValidator } from '../validators/account';
import { v4 } from 'uuid';

class CreateAccountService {
    private accountDataValidator = AccountDataValidator;
    private accountsTable = AccountsTable;
    private randomGenerator = RandomGenerator;

    public async execute (account: Account): Promise<any> {
        try {
            const validAccountData = new this.accountDataValidator(account);

            if (validAccountData.errors) {
                throw new Error(`400: ${validAccountData.errors}`);
            }

            validAccountData.account.id = v4();
            validAccountData.account.agency_number = this.randomGenerator.generate(4);
            validAccountData.account.agency_check_digit = this.randomGenerator.generate(1);
            validAccountData.account.account_number = this.randomGenerator.generate(6);
            validAccountData.account.account_check_digit = this.randomGenerator.generate(1);
            // validAccountData.account.user_id = userId;

            const insertedAccount = await new this.accountsTable().insert(validAccountData.account as Account);

            if (insertedAccount) {
                return insertedAccount;
                // {
                //     data: validAccountData.account,
                //     messages: [],
                // } as APIResponse;
            }

            return {
                data: {},
                messages: ['an error occurred while creating account'],
            } as APIResponse;
        } catch (error) {
            throw new ExceptionTreatment(
                error as Error,
                500,
                'an erro occurred while inserting on database',
            );
        }
    }
}

export { CreateAccountService };
