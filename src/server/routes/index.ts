import express, { Request, Response } from 'express';

import {StatusCodes} from 'http-status-codes'
// com essa função consigo apresentar o status da pagina 

import { Router } from "express";

const router =  Router();
// //Inicializa uma instância do Express, que será o núcleo do servidor.

router.get('/', (req: Request, res: Response) => {
    res.send('E ai meu patrao! como vai voce?');
});
// pelo o que entendi aqui onde fazemos uma requisição ao sistema no "https./"  e mandando umas resp.send ou seja uma resposta a requisição 

router.post('/teste', (req: Request, res: Response) => {
    console.log(req.body)

    // aqui usamos o metodo post para retorna o body "corpo que digitamos no postman"

    res.status(StatusCodes.ACCEPTED).send(req.body);
});


// aqui uma função da biblioteca Status code para mostar uma resposta de pagina 200 de aceito 


export {router};