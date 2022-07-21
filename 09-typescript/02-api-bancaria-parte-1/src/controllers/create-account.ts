import { Request, Response } from 'express';
import { CreateUserService, CreateAccountService } from '../services';
import { ResponseWriter } from '../utils';

class CreateAccount {
    private createUserService = CreateUserService;
    private createAccountService = CreateAccountService;
    private responseWriter = ResponseWriter;

    public async handle(req: Request, res: Response) {
        try {
            const user = await new this.createUserService().execute(req.body);

            const account = await new this.createAccountService().execute(req.body);

            const result = user.concat(account);

            this.responseWriter.success(res, 201, result);
        } catch (error) {
            this.responseWriter.error(res, error as Error);
        }
    }
}

export { CreateAccount };
