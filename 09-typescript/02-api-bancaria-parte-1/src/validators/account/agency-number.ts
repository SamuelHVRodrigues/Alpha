class AgencyNumberValidator {
    public errors: string;
    public agencyNumber: string;

    private regex = /\d{4}/;

    public constructor (agencyNumber: string) {
        this.errors = '';
        this.agencyNumber = this.validate(agencyNumber);
    }

    private validate (agencyNumber: string): string {
        if (!agencyNumber) {
            this.errors += 'agency number:field required|';
            return '';
        }

        if(!this.regex.test(agencyNumber)) {
            this.errors += 'agency number:invalid agency number';
            return '';
        }

        return agencyNumber.trim();
    }
}

export { AgencyNumberValidator };