import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/home/LandingPage';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/register/RegisterForm'
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { PublicRoutes } from './routers/PublicRouters';
import { DashboardRoutes } from './routers/DashboardRoutes';
import { PrivateRoutes } from './routers/PrivateRoutes';

function App() {

  const [isLogedIn, setIsLogedIn] = useState(false)
  const [checkIn, setCheckIn] = useState(true)
  const [user, setUser] = useState("")

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user)=>{
      if(user?.uid){
        setUser(user.displayName)
        setIsLogedIn(true)
      } else {
        setIsLogedIn(false)
      }
      setCheckIn(false)
    })
  }, [isLogedIn, checkIn])

  if(checkIn){
    return(
      <h1>Espere...</h1>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage user={user}/>}/>
          <Route path="/login" element={<PublicRoutes isAuthenticate={isLogedIn}>
            <LoginForm/>
          </PublicRoutes>}/> 
          <Route path="/register" element={<PublicRoutes isAuthenticate={isLogedIn}>
            <RegisterForm/>
          </PublicRoutes>}/>
          <Route path="/*" element={<PrivateRoutes isAuthenticate={isLogedIn}>
            <DashboardRoutes/>
          </PrivateRoutes>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
