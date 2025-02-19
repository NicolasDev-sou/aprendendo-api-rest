import { server } from './server/Server';

const PORT = 3601;

server.listen(PORT, () => {
    console.log('Tamo on, pai!');
});