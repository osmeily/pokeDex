import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionPokemon } from '../../actions/actionPokemon';
import { typeColor } from '../pokemon/typeColor';

const Card = () => {

const navigate = useNavigate()
const dispatch = useDispatch()

const [pokemon, setPokemon] = useState([])
const [urls, setUrls] = useState([
    "https://pokeapi.co/api/v2/pokemon/1",
    "https://pokeapi.co/api/v2/pokemon/2",
    "https://pokeapi.co/api/v2/pokemon/3",
    "https://pokeapi.co/api/v2/pokemon/4",
    "https://pokeapi.co/api/v2/pokemon/5",
    "https://pokeapi.co/api/v2/pokemon/6",
    "https://pokeapi.co/api/v2/pokemon/7",
    "https://pokeapi.co/api/v2/pokemon/8",
    "https://pokeapi.co/api/v2/pokemon/9",
    "https://pokeapi.co/api/v2/pokemon/10",
    "https://pokeapi.co/api/v2/pokemon/11",
    "https://pokeapi.co/api/v2/pokemon/12",
    "https://pokeapi.co/api/v2/pokemon/13",
    "https://pokeapi.co/api/v2/pokemon/14",
    "https://pokeapi.co/api/v2/pokemon/15",
    "https://pokeapi.co/api/v2/pokemon/16",
    "https://pokeapi.co/api/v2/pokemon/17",
    "https://pokeapi.co/api/v2/pokemon/18",
    "https://pokeapi.co/api/v2/pokemon/19",
    "https://pokeapi.co/api/v2/pokemon/20",
    "https://pokeapi.co/api/v2/pokemon/21",
    "https://pokeapi.co/api/v2/pokemon/22",
    "https://pokeapi.co/api/v2/pokemon/23",
    "https://pokeapi.co/api/v2/pokemon/24",
    "https://pokeapi.co/api/v2/pokemon/25",
]);

const getId = (e) => {
    dispatch(actionPokemon(e.target.id))
    navigate("/details")
}

const getPokeData = async(url) => {
    const resp = await fetch(url)
    const data = await resp.json()
    return data
}

useEffect(() => {
    const getAllPokemon = async() => {
        urls.map(async (url) => {
            const pokeData = await getPokeData(url)
            setPokemon(pokemon => [...pokemon, pokeData])
        })
    }
    getAllPokemon()
    console.log(pokemon)
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

    return (
        <div className='grid grid-cols-3'>
            {
                pokemon.map(poke => (
                    <div>
                        <div value={poke.id} id={poke.id} name="selected" key={poke.id} onClick={(e)=> getId(e)} className="w-60 cursor-pointer p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img id={poke.id} className="h-40 object-cover rounded-xl mx-auto" src={poke.sprites.other.dream_world.front_default} alt=""/>
                    <div id={poke.id} className="p-2">
                        <h2 className="font-bold text-lg mb-2 ">{poke.name}</h2>
                        <p className="text-sm text-gray-600">N.º{poke.id}</p>
                    </div>
                    <div id={poke.id} className="m-2">
                    {
                        poke.types.map(typ => (
                            <button key={poke.id + typ.type.name} style={{background:typeColor[typ.type.name]}} className="text-white px-3 py-1 rounded-md">{typ.type.name}
                        </button>
                        ))
                    }
                    </div>
                    </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;
