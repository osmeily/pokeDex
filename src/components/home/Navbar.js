import React from 'react';
import { Link } from 'react-router-dom';
import pokemon from "../../resources/pokeball.png"
import { useDispatch } from 'react-redux';
import { actionLogoutAsync } from '../../actions/actionLogin';

const Navbar = ({user}) => {

    const dispatch = useDispatch()


    const handleLogout = () => {
        dispatch(actionLogoutAsync())
    }

    return (
        <nav className="bg-rose-500 shadow-lg">
            <div className=" mx-auto">
                <div className="sm:flex gap-20 justify-around">
                    <Link to={"/"} className="text-white text-3xl sm:flex items-center font-bold p-3">
                        <img src={pokemon} style={{width: "60px"}} alt=""/>
                        <h2>PokeApp</h2>
                    </Link>
                    <ul className="text-white sm:self-center text-xl border-t sm:border-none">
                        <li className="sm:inline-block">
                        <Link to={"/login"} className="p-3 hover:text-rose-200">{user ? "Hola, "+user : "Login"}</Link>
                        <Link to={"/register"} className="p-3 hover:text-rose-200">Registro</Link>
                        { user ? <Link to={"/"} onClick={()=>handleLogout()} className="p-3 hover:text-rose-200">LogOut</Link> : "" }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
    
};

export default Navbar;
