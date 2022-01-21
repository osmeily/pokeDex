import types from "../types/types";
import {createUserWithEmailAndPassword, getAuth, updateProfile} from "firebase/auth"

export const actionRegister = (name, email, pass) => {
    return{
        type: types.register,
        payload: {
            name,
            email,
            pass
        }
    }
}

export const actionRegisterAsync = (email, pass, name) => {
    return (dispatch)=> {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, pass)
            .then(
                async ({user}) => {
                    await updateProfile(auth.currentUser, {displayName:name})
                    dispatch(actionRegister(user.email, user.uid))
                    console.log(user)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }
}