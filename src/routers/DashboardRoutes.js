import { Navigate, Route, Routes } from "react-router-dom"
import PokeDetails from "../components/pokemon/PokeDetails"


export const DashboardRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/details" element={<PokeDetails/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </>
    )
}