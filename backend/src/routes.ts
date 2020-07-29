import {Router} from 'express';

import UserController from './controllers/UserController';
import AuthenticateController from './controllers/AuthenticateController';


const userController = new UserController();
const authenticateController = new AuthenticateController();

const routes = Router();

routes.get('/', (request, response)=>{
    return response.json({ok: true});
})

//rota de usuários
routes.get('/users', userController.findAll);
routes.post('/users', userController.create);

//rota de autenticação
routes.post('/authenticate', authenticateController.store);

export default routes;
