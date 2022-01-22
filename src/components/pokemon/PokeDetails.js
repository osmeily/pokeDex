import React from 'react';
import { useNavigate } from 'react-router-dom';
import pokeball from "../../resources/pokeball.png"
import Footer from '../home/Footer';
import { typeColor } from './typeColor';

const PokeDetails = () => {

    const navigate = useNavigate()

    const {normal, fire, water, grass, flying, fighting, poison, electric, ground, rock, psychic, ice, bug, ghost, steel, dragon, dark, fairy} = typeColor

    return (
        <div>
        <div className='p-6  bg-neutral-100'>
            <div onClick={()=> navigate('/')} className='flex w-1/6 cursor-pointer font-bold justify-center gap-4 rounded-3xl items-center hover:shadow-lg hover:bg-rose-500 bg-rose-600'>
                <img style={{width:"50px"}} src={pokeball} alt=""/>
                <p className='text-xl text-white'>Regresar</p>
            </div>
            <div className='shadow-lg bg-white m-8 mx-auto rounded-xl w-2/3'>
                <h2 className='text-3xl text-gray-500 text-center p-5'>Nro 732</h2>
                <p className='text-3xl text-gray-500 text-center shadow-md shadow-rose-100'>Sylveon</p>
                <div className='flex'>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png" alt=""/>
                    <div className='p-10 leading-relaxed text-lg'>
                        <p className='text-gray-500 text-md'>
                            Con sus apéndices sensoriales en forma de cinta, puede emitir ondas que neutralizan la hostilidad y detener así cualquier contienda.
                        </p>
                        <p className='text-lg px-4 py-2'>Altura: </p>
                        <p className='text-lg px-4 py-2'>Peso: </p>
                        <p className='text-lg px-4 py-2'>Habilidad: </p>
                        <p className='text-lg px-4 py-2'>Tipo:</p>
                        <button style={{margin:"0px 10px", color: "white", padding:"6px 25px", borderRadius:"20px", background:fairy}}>fairy</button>
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
};

export default PokeDetails;
