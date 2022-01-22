import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { typeColor } from '../pokemon/typeColor';

const Card = () => {

const navigate = useNavigate()

const [pokemon, setPokemon] = useState([]);

const url = "https://pokeapi.co/api/v2/pokemon/lucario"

const getPokemon = () => {
    fetch(url)
    .then(
        resp => resp.json()
    )
    .then(
        response => {
            const {data = [response]} = response
            setPokemon(data)
            console.log(data);
        }
    )
}

useEffect(() => {
    getPokemon()
}, []);

    return (
        <div>
            {
                pokemon.map(poke => (
                    <div key={pokemon} onClick={()=> navigate("/details")} className="w-60 cursor-pointer p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img className="h-40 object-cover rounded-xl mx-auto" src={poke.sprites.other.dream_world.front_default} alt=""/>
                    <div className="p-2">
                        <h2 className="font-bold text-lg mb-2 ">{poke.name}</h2>
                        <p className="text-sm text-gray-600">N.º700</p>
                    </div>
                    <div className="m-2">
                        <button style={{background:typeColor[poke.types[0].type.name]}} className="text-white bg-pink-300 px-3 py-1 rounded-md">{poke.types[0].type.name}
                        </button>
                    </div>
                </div>
                ))
            }
        </div>
    );
};

export default Card;
