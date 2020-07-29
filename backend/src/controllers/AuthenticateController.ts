import {Request, Response} from 'express';

import AuthenticateService from '../services/AuthenticateService';

/**
 * Autenticação de usuários na aplicação
 */
export default class AuthenticateController{
    public async store(request: Request, response: Response): Promise<Response>{

        try {
            const {email, password} = request.body;

            const authenticate = new AuthenticateService();

            const user = await authenticate.execute({email, password});

            delete user.password;

            return response.status(200).json(user);

        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }
}
