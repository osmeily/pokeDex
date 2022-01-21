import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/home/LandingPage';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/register/RegisterForm'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginForm/>}/> 
          <Route path="/register" element={<RegisterForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
