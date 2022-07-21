import { Request, Response } from 'express';
import { GetBalanceService } from '../services';
import { ResponseWriter } from '../utils';

class GetBalance {
    private service = GetBalanceService;
    private responseWriter = ResponseWriter;

    public async handle(req: Request, res: Response) {
        try {
            const response = await new this.service().execute(req.body);
            
            this.responseWriter.success(res, 201, response);
        } catch (error) {
            this.responseWriter.error(res, error as Error);
        }
    }
}

export { GetBalance };
