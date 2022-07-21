import express from 'express';
import Users from './users';
import Accounts from './accounts';
import Balances from './get-balance';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(Users);
app.use(Accounts);
app.use(Balances);


export default app;