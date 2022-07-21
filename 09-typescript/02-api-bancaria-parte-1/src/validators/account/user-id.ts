class UserIdValidator {
    public userId: string;
    public errors: string;

    public constructor (userId: string) {
        this.errors = '';
        this.userId = this.validate(userId);
    }

    private validate (userId: string): string {
        if(!userId) {
            this.errors += 'userId:userId required|';
            return '';
        }

        if(userId.length !== 36) {
            this.errors += 'userId:invalid userId|';
            return '';
        }

        return userId.trim();
    }
}

export { UserIdValidator };
