import React, { useState, FormEvent, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import { Container, Content } from './styles'
import logoPoke from '../../assets/LogoPoke.svg';

const LoginIn: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleAuthenticate(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        console.log(email, password);

        history.push('/dashboard');
       
    }
    useEffect(()=>{
        window.document.title= 'Login'
    },[]);
    return (
        <>
            <Container>
                <Content>
                    <img src={logoPoke} alt="logo" />
                    <form onSubmit={handleAuthenticate}>
                        <label>E-mail</label>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            placeholder="Digite seu email"
                        />

                        <label>Senha</label>
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="Digite sua senha"
                        />
                        <button type="submit">ENTRAR</button>
                    </form>
                </Content>
            </Container>
        </>
    );
}

export default LoginIn;