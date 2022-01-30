import Header from "../../common/Header/Header";
import React, { useState } from "react";
import './Login.css';
import MyButton from "../../common/Button/MyButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const baseUrl = "http://localhost:5000/api";
    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const login = () => {
        axios.post(baseUrl + '/user/login', {
            email: email,
            password: password
        })
        .then(res => navigate('/home'))
        .catch(err => console.log(err)) 
        
    }

    return(
        <div className="">
            <Header />

            <div className="model-container">
                <div className="model-card">
                    <form action="">
                        <span>Login</span>
                        <div className="login-group">
                            <label htmlFor="">Email:</label>
                            <input type="text" 
                                placeholder="Ejemplo@gmail.com"
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                        <div className="login-group">
                            <label htmlFor="">Contraseña:</label>
                            <input type="password"
                                placeholder="Contraseña"
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>
                        
                        <MyButton title={'Continuar'} onClick={() => login()}/>
                        <p>Todavia no tienes una cuenta? <Link to={'/register'} className="link">Registrate</Link> </p> 
                    </form> 
                </div>
            </div>  
        </div>
        
    )
}

export default Login;