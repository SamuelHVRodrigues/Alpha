import express, { Request, Response } from 'express';
// import routes from './routes';

const app = express();

// app.use(routes);



const PORT = process.env.PORT || 4000;

app.get('/', (req: Request, res: Response) => res.send('Cabou a brincadeira'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));