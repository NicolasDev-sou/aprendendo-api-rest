
import express, { Request, Response } from 'express'; // freamework para o node.js para facilitar a criação da api rest (biblioteca)
// Request, response -- Fazem parte da biblioteca express para definir uma requisição e uma resposta 
import 'dotenv/config';
//  Carrega variavel de ambientes do arquivo nomeado .env 

import {router} from './routes'
// importamos uma aquisição do arquivo nomeado "routes"

const server = express();
//Inicializa uma instância do Express, que será o núcleo do servidor.

server.use (express.json());
//Adiciona uma (middleware), faz uma intermediação de requisições e respostas com os dados Json 

server.use (router);
// aqui onde fazemos a ligação como roteador para as funções GET, POST 

export { server };
// função para podermos iniciar o servidor em um arquivo separado 