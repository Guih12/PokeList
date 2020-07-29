import { getRepository } from 'typeorm';
import {compare} from 'bcryptjs';

import AuthenticateRequest from '../interfaces/AuthenticateRequest';
import AppError from '../errors/AppError';
import User from '../models/User';

/**
 * Reponsável pela regra de negócio
 * de autenticação de um usuário
 */
export default class AuthenticateService{
    public async execute({email, password}: AuthenticateRequest): Promise<User>{

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({
            where: {email}
        });

        if(!user) throw new AppError('Incorrect email/password combination', 401);

        const passwordMathed = await compare(password, user.password);

        if(!passwordMathed) throw new AppError('Incorrect email/password combination', 401);

        return user;
    }
}
