import { Router } from 'express';
import { GetBalance } from '../controllers';

const route = Router();

route.route('/balance').get(new GetBalance().handle.bind(new GetBalance()));

export default route;