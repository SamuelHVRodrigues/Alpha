class CpfValidator {
    public errors: string;
    public cpf: string;

    private regex = /\d{11}/;

    public constructor (cpf: string) {
        this.errors = '';
        this.cpf = this.validate(cpf);
    }

    private validate (cpf: string): string {
        if(!cpf) {
            this.errors += 'cpf:field required|';
            return '';
        }

        if(!this.regex.test(cpf)) {
            this.errors += 'cpf:cpf is invalid|';
            return '';
        }

        return cpf.trim();
    }
}

export { CpfValidator };
