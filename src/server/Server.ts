import express, { Request, Response } from 'express';

const server = express();

server.get('/', (_req: Request, res: Response) => {
    res.send('E ai meu patrao! como vai?');
});

export { server };