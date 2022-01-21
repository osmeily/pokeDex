import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { facebook, google } from "../firebase/firebaseConfig"
import types from "../types/types"

export const actionLogin = (user, pass) => {
    return {
        type: types.login,
        payload: {
            user,
            pass
        }
    }
}

export const actionLogout = () => {
    return {
        type: types.logout,
        payload: {}
    }
}

export const actionLoginGoogle = () => {
    return(dispatch) => { 
        const auth = getAuth()
        signInWithPopup(auth, google)
        .then(
            ({user})=> {
                //console.log(user.uid, user.displayName)
                dispatch(actionLogin(user.uid, user.displayName))
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }
}

export const actionLoginFacebook = () => {
    return(dispatch) => { 
        const auth = getAuth()
        signInWithPopup(auth, facebook)
        .then(
            ({user})=> {
                console.log(user.uid, user.displayName)
                //dispatch(actionLogin(user.uid, user.displayName))
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }
}

export const actionLoginAsync = (email, pass) => {
    return(dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, pass)
        .then(
            ({user})=>{
                dispatch(actionLogin(user.email, user.uid))
                console.log("bienvenido")
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }
}

export const actionLogoutAsync = () => {
    return(dispatch) => {
        const auth = getAuth()
        signOut(auth)
        .then(
            () => {
                dispatch(actionLogout())
                console.log("Hasta luego!")
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }
}