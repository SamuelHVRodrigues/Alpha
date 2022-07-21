class BalanceValidator {
    public errors: string;
    public balance: number;

    public constructor (balance: number) {
        this.errors = '';
        this.balance = this.validate(balance);
    }

    private validate (balance: number): number {
        if (!balance) {
            this.errors += 'balance:balance is required|';
            return 0;
        }

        if (balance < 0) {
            this.errors = 'balance:balance cannot be negative';
            return 0;
        }

        return balance;
    }

}

export { BalanceValidator };
