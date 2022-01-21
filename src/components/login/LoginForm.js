import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionLoginAsync, actionLoginFacebook, actionLoginGoogle } from '../../actions/actionLogin';
import pokemon from "../../resources/pokemon.png"

const LoginForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGoogle = () => {
        dispatch(actionLoginGoogle())
    }

    const handleFacebook = () => {
        dispatch(actionLoginFacebook())
        navigate("/")
    }

    const [login, setLogin] = useState({
        user: "",
        pass: ""
    })

    const {user, pass} = login

    const handleOnChange = ({target}) => {
        setLogin({
            ...login,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user, pass)
    }

    const handleLogin = () => {
        dispatch(actionLoginAsync(user, pass))
    }

    return (
        <div className="bg-white py-10 px-10 min-h-screen text-xl">
            <img onClick={()=> navigate("/")} className='mx-auto' style={{width:"200px", cursor:"pointer"}} src={pokemon} alt=""/>
            <form onSubmit={handleSubmit} className="md:w-1/2 mx-auto">
            <h5 className='font-thin text-center p-7 text-3xl '>Inicia sesión</h5>
                <div className="shadow-xl">
                    <div className="flex items-center bg-rose-400 rounded-t-lg border-b border-rose-700">
                        <label className="w-20 text-right mr-8 text-purple-200">Email</label>
                        <input onChange={handleOnChange} type="email" name="user" value={user} placeholder="Ingrese su email" className="flex-1 p-4 pl-0 bg-transparent placeholder-rose-700 outline-none text-white"/>
                    </div>
                    <div className="flex items-center bg-rose-400 rounded-b-lg mb-10">
                        <label className="w-20 text-right mr-8 text-purple-200">Pass</label>
                        <input onChange={handleOnChange} type="password"  name="pass" value={pass} placeholder="Ingrese contraseña" className="flex-1 p-4 pl-0 bg-transparent placeholder-rose-700 outline-none text-white"/>
                    </div>
                </div>
                <button type='submit' onClick={()=> handleLogin()} className="block w-full rounded bg-emerald-400 py-3 text-white font-bold shadow">Continuar</button>
                <div className='flex'>
                    <button type='submit' onClick={()=> handleGoogle()} className="block w-full rounded bg-white text-red-600 py-3 font-bold shadow">Login Google</button>
                    <button type='submit' onClick={()=> handleFacebook()} className="block w-full rounded text-sky-900 py-3 bg-white font-bold shadow">Login Facebook</button>
                </div>
            </form>
        </div>
    )
};

export default LoginForm;
