import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pokeball from "../../resources/pokeball.png"
import Footer from '../home/Footer';
import { typeColor } from './typeColor';

const PokeDetails = () => {

    const [pokemon, setPokemon] = useState([]);

    const navigate = useNavigate()

    const getPokemonId =  useSelector((selectedPokemon => selectedPokemon.pokemon.selectedPokemon))
    console.log();

    const ClickedPokemon = () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${getPokemonId}`
        fetch(url)
        .then(
            resp => resp.json()
        )
        .then(
            response => {
                const {data = [response]} = response
                setPokemon(data);
                console.log(data);
            }
        )
    }

    useEffect(() => {
        ClickedPokemon()
    }, []);
    

    return (
        <div className='bg-neutral-100 p-4'>
                <div onClick={()=> navigate('/')} className='flex w-1/6 cursor-pointer font-bold justify-center gap-4 rounded-3xl items-center hover:shadow-lg hover:bg-rose-500 bg-rose-600'>
                    <img style={{width:"50px"}} src={pokeball} alt=""/>
                    <p className='text-xl text-white'>Regresar</p>
                </div>
            {
                pokemon.map(pokemonito => (
                    <div key={pokemonito.id} className='p-6  bg-neutral-100'>
                        <div className='shadow-lg p-5 bg-white m-8 mx-auto rounded-xl w-2/3'>
                            <h2 className='text-3xl text-gray-500 text-center p-2'>N.º {pokemonito.id}</h2>
                            <p className='text-3xl text-gray-500 text-center shadow-md shadow-rose-100'>{pokemonito.name}</p>
                            <div className='flex justify-around'>
                                <img className='w-2/5' src={pokemonito.sprites.other.dream_world.front_default} alt=""/>
                                <div className='p-10 leading-relaxed text-lg'>
                                    <p className='text-lg px-4 py-2'>Altura: {pokemonito.height}'' </p>
                                    <p className='text-lg px-4 py-2'>Peso: {pokemonito.weight}gr</p>
                                    <label className='text-lg px-4 py-2'>Habilidades: {
                                        pokemonito.abilities.map(ability => (
                                            <p key={pokemonito.id+ ability.ability.name} className='text-sm mx-6'>{ability.ability.name}</p>
                                        ))
                                    }</label>
                                    <p className='text-lg px-4'>Apariencia:</p>
                                    <div className='flex'>
                                        <img src={pokemonito.sprites.front_default} alt=''/>
                                        <img src={pokemonito.sprites.back_default} alt=''/>
                                    </div>
                                    <p className='text-lg px-4'>Tipo o tipos: {
                                        pokemonito.types.map(typ => (
                                            <button  key={pokemonito.id + typ.type.name} style={{margin:"0px 10px", color: "white", padding:"6px 25px", borderRadius:"20px", background:typeColor[typ.type.name]}}>{typ.type.name}</button>
                                        ))
                                    }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        <Footer/>
        </div>
    )
};

export default PokeDetails
