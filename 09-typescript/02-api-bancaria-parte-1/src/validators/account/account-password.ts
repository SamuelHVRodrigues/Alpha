class AccountPasswordValidator {
    public accountPassword: number;
    public errors: string;

    public constructor (accountPassword: number) {
        this.errors = '';
        this.accountPassword = this.validate(accountPassword);
    }

    private validate (accountPassword: number): number{
        if (!accountPassword) {
            this.errors += 'password:password required|';
            return 0;
        }

        if (accountPassword.toString().length !== 8) {
            this.errors += 'password:invalid password';
            return 0;
        }

        return accountPassword;
    }
}

export { AccountPasswordValidator };
