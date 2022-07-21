import { UserDataValidator } from '../validators/user';
import { UsersTable } from '../clients/dao/postgres/users';
import { User, APIResponse } from '../models';
import { v4 } from 'uuid';
import { ExceptionTreatment } from '../utils';

class CreateUserService {
    private userDataValidator = UserDataValidator;
    private usersTable = UsersTable;

    public async execute (user: User): Promise<any> {
        try {
            const validUserData = new this.userDataValidator(user);
            if (validUserData.errors) {
                throw new Error(`400: ${validUserData.errors}`);
            }
            
            const alreadyExists = await new this.usersTable().find(user.cpf);
            if (!alreadyExists) {
                validUserData.user.id = v4();
                
                const insertedUser = await new this.usersTable().insert(validUserData.user as User);
                if (insertedUser) {
                    return validUserData.user;
                    // {
                    //     data: validUserData.user,
                    //     messages: [],
                    // } as APIResponse;
                }
            }

            if (alreadyExists) {
                return alreadyExists;
            }

            return {
                data: {},
                messages: ['an error occurred while creating user'],
            } as APIResponse;
        } catch (error) {
            throw new ExceptionTreatment(
                error as Error,
                500,
                'an erro occurred while inserting on database',
            );
        }
    }
}

export { CreateUserService };
