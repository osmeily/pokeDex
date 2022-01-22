import { Navigate } from "react-router-dom"


export const PrivateRoutes = ({isAuthenticate, children}) => {
    return isAuthenticate ? children : <Navigate to="/login"/>
}