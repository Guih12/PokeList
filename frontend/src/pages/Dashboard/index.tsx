import React, {useState, FormEvent, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

import logoPoke from '../../assets/LogoPoke.svg';
import {Navbar, Container, Cardlist, Cardform, Error} from './styles';

import pokeApi from '../../services/pokeApi';

const Dashboard: React.FC = ()=>{
    
    interface Pokemons{
        name: string;
        order: number;
        sprites: {
            front_default: string;
        }
    }

    const [newPokemon, newSetPokemon] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const [pokemons, setPokemons] = useState<Pokemons[]>([])

    async function handleAddPokemon(e: FormEvent<HTMLFormElement>): Promise<void>{
        e.preventDefault();

        if(!newPokemon){
            return setError('Digite o nome do pokemon');
        }

        try{
            
            const response = await pokeApi.get(`${newPokemon.toLowerCase()}`);
            const pokemon = response.data;
    
            setPokemons([...pokemons, pokemon]);
            newSetPokemon('');
            setError('');
        }catch(err){
            setError('Erro ao buscar esse pokemon');
        }
    }
    function handleLogout(){
        localStorage.clear();
        history.push('/login');
    }
    useEffect(()=>{
        window.document.title= 'Dashboard'
    },[]);

    return (
        <>  
        <Navbar>
            <img src={logoPoke} alt="logo"/>
            <Link to="/login"onClick={handleLogout}>Sair</Link>
        </Navbar>

        <Cardform>
            <h1>Procure e adicione pokémons aqui mesmo</h1>
            <form onSubmit={handleAddPokemon}>
                <input 
                value={newPokemon}
                onChange={e => newSetPokemon(e.target.value)}
                type="text" 
                placeholder="Digite o nome do pokémon"
                />
                <button type="submit">Adicione</button>
            </form>
            {error && <Error> {error} </Error>}
        </Cardform>
       

        <Container>
            {pokemons.map(pokemon =>(
                <Cardlist key={pokemon.name}>
                    <img src={pokemon.sprites.front_default} alt="teste"/>
                    <div>
                        <span> {pokemon.name} </span>
                        <p> {pokemon.order} </p>
                    </div>
                </Cardlist>
            ))}
        </Container>
        </>
    );
}

export default Dashboard;