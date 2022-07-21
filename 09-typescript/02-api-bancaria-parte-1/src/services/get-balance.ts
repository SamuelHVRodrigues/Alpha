import { AccountsTable } from "../clients/dao/postgres/accounts";
import { TransactionsTable } from "../clients/dao/postgres/transactions";
import { Account, APIResponse } from "../models";
import { ExceptionTreatment } from "../utils";
import { AccountDataValidator } from "../validators";

class GetBalanceService {
    private accountDataValidator = AccountDataValidator;
    private accountsTable = AccountsTable;
    private transactionsTable = TransactionsTable;

    public async execute (account: Account) {
        try {
            const validAccountData = new this.accountDataValidator(account);
            console.log(validAccountData);

            if (validAccountData.errors) {
                throw new Error(`400: ${validAccountData.errors}`);
            }

            const accountBalance = await new this.accountsTable().get(validAccountData.account as Account);
            console.log(accountBalance);

            const balance = await new this.transactionsTable().get(accountBalance.id);

            console.log(balance);

            if (balance) {
                console.log('opa');
                return {
                    data: balance.map((data: any) => ({
                        date: data.date,
                        value: data.value,
                        type: data.type,
                        // fee: data.fee,
                    })),
                    messages: []
                } as APIResponse;
            }

            return {
                data: {},
                messages: ['an erro occurred while getting balance'],
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

export { GetBalanceService };
