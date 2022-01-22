import { Navigate } from "react-router-dom"


export const PublicRoutes = ({isAuthenticate, children}) => {
    return !isAuthenticate ? children : <Navigate to="/"/>

}