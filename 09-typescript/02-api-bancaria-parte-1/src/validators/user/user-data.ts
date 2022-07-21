import { NameValidator, EmailValidator, DateValidator, CpfValidator } from '.';
import { User } from '../../models';

class UserDataValidator {
    public user: Partial<User>;
    public errors: string;

    private nameValidator = NameValidator;
    private emailValidator = EmailValidator;
    private dateValidator = DateValidator;
    private cpfValidator = CpfValidator;

    public constructor (user: User) {
        this.errors = '';
        this.user = this.validate(user);
    }

    private validate (user: User): Partial<User> {
        const validName = new this.nameValidator(user.name);
        const validEmail = new this.emailValidator(user.email);
        const validBirthdate = new this.dateValidator(user.birthdate);
        const validCpf = new this.cpfValidator(user.cpf);

        this.errors = this.errors.concat(`${validName.errors}${validEmail.errors}${validBirthdate.errors}${validCpf.errors}`);

        const userData: Partial<User> = {
            name: validName.name,
            email: validEmail.email,
            birthdate: validBirthdate.date,
            cpf: validCpf.cpf,
        }

        return userData;
    }
}

export { UserDataValidator };
