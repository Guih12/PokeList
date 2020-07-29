import {Request, Response} from 'express';
import CreateUserService from '../services/CreateUserService';


/**
 * Criação de usuários
 */
export default class UserController{
    public async create(request: Request, response: Response): Promise<Response>{
        try {
            const {name, email, password} = request.body;

            const createUser = new CreateUserService();

            const user = await createUser.execute({name, email, password});

            return response.json(user);

        } catch (err) {
            return response.status(400).json({error:err.message});
        }
    }

    public async findAll(request: Request, response: Response): Promise<Response>{
        try {
            const userService = new CreateUserService();

            const users = await userService.findAll();

            return response.json(users);

        } catch (err) {
            return response.status(400).json({error: err.message})
        }

    }
}
