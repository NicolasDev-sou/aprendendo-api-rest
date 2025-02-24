import { server } from './server/Server';
//aqui nos buscamos os dados de server dentro do arquivo './server/Server'


server.listen(process.env.PORT || 3000, () => {
    console.log(`Tamo on pai , na porta ${process.env.PORT || 3000 }`);
});

// aqui fazemos uma impressão na tela com o console.log e também adicionamos um metodo de porta padrão listado no.env como a porta para abrir o servidor ou se ela der algo usamos a porta 3000