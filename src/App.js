import './App.css';
import { Routes, Route, Navigate, Outlet} from 'react-router-dom';
import Login from './components/screens/Login/Login';
import Register from './components/screens/Register/Register'
import Home from './components/screens/Home/Home'

const Auth = () => {

  const isLoggedIn = !!localStorage.getItem('token')
  
  return(
    isLoggedIn ? <Outlet /> : <Navigate to={'/login'}/>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Navigate to="/login" />}/>
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/register"} element={<Register/>}/>
        <Route element={<Auth />}>
          <Route path="/home" element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
