import { Router } from 'express';
import { CreateAccount, CreateUser } from '../controllers';

const route = Router();

route.route('/accounts')
// .post(new CreateUser().handle.bind(new CreateUser()))
.post(new CreateAccount().handle.bind(new CreateAccount()));

export default route;