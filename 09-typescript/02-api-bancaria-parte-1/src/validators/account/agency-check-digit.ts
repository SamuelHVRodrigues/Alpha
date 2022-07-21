class AgencyCheckDigitValidator {
    public errors: string;
    public agencyCheckDigit: string;

    private regex = /\d{1}/;

    public constructor (agencyCheckDigit: string) {
        this.errors = '';
        this.agencyCheckDigit = this.validate(agencyCheckDigit);
    }
    
    private validate (agencyCheckDigit: string): string {
        if (!agencyCheckDigit) {
            this.errors += 'agency check digit:field required|';
            return '';
        }

        if (!this.regex.test(agencyCheckDigit)) {
            this.errors += 'agency check digit:invalid agency check digit|';
            return '';
        }

        return agencyCheckDigit.trim();
    }
}

export { AgencyCheckDigitValidator };