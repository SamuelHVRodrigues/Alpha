import express, { Request, Response } from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/ping', (req: Request, res: Response) => {
    res.json({
        message: 'pong',
    })
})

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
