import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionRegisterAsync } from '../../actions/actionRegister';
import pokemon from "../../resources/pokemon.png"

const RegisterForm = () => {

    const dispatch = useDispatch()

    const [register, setRegister] = useState({
        name:"",
        email:"",
        pass:""
    })

    const {name, email, pass} = register

    const navigate = useNavigate()

    const handleOnChange = ({target}) => {
        setRegister({
            ...register,
            [target.name] : target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, pass)
        dispatch(actionRegisterAsync(email, pass, name))
    }

    return (
        <div className="bg-white py-10 px-10 min-h-screen text-xl">
            <img onClick={()=> navigate("/")} className='mx-auto' style={{width:"200px", cursor:"pointer"}} src={pokemon} alt=""/>
            <form action="" onSubmit={handleSubmit} className="md:w-1/2 mx-auto">
            <h5 className='font-thin text-center p-7 text-3xl '>Inicia sesión</h5>
                <div className="shadow-xl">
                    <div className="flex items-center bg-rose-400 rounded-t-lg border-b border-rose-700">
                        <label className="w-20 text-right mr-8 text-purple-200">Nombre</label>
                        <input onChange={handleOnChange} type="text" name="name" placeholder="Ingrese su nombre" className="flex-1 p-4 pl-0 bg-transparent placeholder-rose-700 outline-none text-white"/>
                    </div>
                    <div className="flex items-center bg-rose-400 rounded-b-lg">
                        <label className="w-20 text-right mr-8 text-purple-200">Email</label>
                        <input onChange={handleOnChange} type="email"  name="email" placeholder="Ingrese su email" className="flex-1 p-4 pl-0 bg-transparent placeholder-rose-700 outline-none text-white"/>
                    </div>
                    <div className="flex items-center bg-rose-400 rounded-b-lg mb-10 border-t border-rose-700">
                        <label className="w-20 text-right mr-8 text-purple-200">Contraseña</label>
                        <input onChange={handleOnChange} type="password"  name="pass" placeholder="Ingrese contraseña" className="flex-1 p-4 pl-0 bg-transparent placeholder-rose-700 outline-none text-white"/>
                    </div>
                </div>
                <button type='submit' className="block w-full rounded bg-emerald-400 py-3 text-white font-bold shadow">Crear cuenta</button>
            </form>
        </div>
    )
};

export default RegisterForm;
