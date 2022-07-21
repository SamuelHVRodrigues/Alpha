import { Account } from '../../models/account';
import {
    // BalanceValidator,
    UserIdValidator,
    AccountPasswordValidator
} from '.';

class AccountDataValidator {
    public account: Partial<Account>;
    public errors: string;

    // private balanceValidator = BalanceValidator;
    private userIdValidator = UserIdValidator;
    private accountPasswordValidator = AccountPasswordValidator;

    public constructor (account: Account) {
        this.errors = '';
        this.account = this.validate(account);
    }

    private validate (account: Account): Partial<Account> {
        // const validBalance = new this.balanceValidator(account.balance);
        const validUserId = new this.userIdValidator(account.user_id);
        const validAccountPassword = new this.accountPasswordValidator(account.account_password);

        this.errors = this.errors.concat(`${validAccountPassword.errors}${validUserId.errors}`);
        // ${validBalance.errors}
        const accountData: Partial<Account> = {
            user_id: validUserId.userId,
            account_password: validAccountPassword.accountPassword
        }
        // balance: validBalance.balance,

        return accountData;
    }
}

export { AccountDataValidator };
