import express, { Request, Response } from 'express';

import {StatusCodes} from 'http-status-codes'

import { Router } from "express";

const router =  Router();

router.get('/', (req: Request, res: Response) => {
    res.send('E ai meu patrao! como vai?');
});

router.post('/teste', (req: Request, res: Response) => {
    console.log(req.body)

    res.status(StatusCodes.ACCEPTED).send(req.body);
});





 


export {router};