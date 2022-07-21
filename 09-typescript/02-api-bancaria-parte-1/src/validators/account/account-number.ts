class AccountNumberValidator {
    public errors: string;
    public accountNumber: string;

    private regex = /\d{6}/;

    public constructor (accountNumber: string) {
        this.errors = '';
        this.accountNumber = this.validate(accountNumber);
    }

    private validate (accountNumber: string): string {
        if (!accountNumber) {
            this.errors += 'account number:field required|';
            return '';
        }

        if(!this.regex.test(accountNumber)) {
            this.errors += 'account number:invalid account number';
            return '';
        }

        return accountNumber.trim();
    }
}

export { AccountNumberValidator };