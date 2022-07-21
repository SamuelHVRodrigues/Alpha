class AccountCheckDigitValidator {
    public errors: string;
    public accountCheckDigit: string;

    private regex = /\d{1}/;

    public constructor (accountCheckDigit: string) {
        this.errors = '';
        this.accountCheckDigit = this.validate(accountCheckDigit);
    }
    
    private validate (accountCheckDigit: string): string {
        if (!accountCheckDigit) {
            this.errors += 'account check digit:field required|';
            return '';
        }

        if (!this.regex.test(accountCheckDigit)) {
            this.errors += 'account check digit:invalid account check digit|';
            return '';
        }

        return accountCheckDigit.trim();
    }
}

export { AccountCheckDigitValidator };