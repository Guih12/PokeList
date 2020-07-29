import { getRepository } from 'typeorm';
import {hash} from 'bcryptjs';



import UserRequest from '../interfaces/UserRequest';
import AppError from '../errors/AppError';
import User from '../models/User';

/**
 * Service responsável pelas regras
 * de nogócio da aplicação
 */
export default class CreateUserService{
    public async execute({name, email, password}: UserRequest): Promise<User>{
        const userRepository = getRepository(User);

        const emailExist = await userRepository.findOne({
            where: {email}
        });

        if(emailExist) throw new AppError('Email already used');

        //responsável por criptografar o password
        const passwordHash = await hash(password, 8);

        const user = await userRepository.create({
            name,
            email,
            password: passwordHash
        });
        await userRepository.save(user);

        return user;
    }

    //Lista todos usuários
    public async findAll(): Promise<User[]>{

        const userRepository = getRepository(User);

        const user = userRepository.find();

        if(!user) throw new AppError('there are no registered users');

        return user;
    }
}
