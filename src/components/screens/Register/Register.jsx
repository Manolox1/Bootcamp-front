import axios from "axios";
import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import MyButton from "../../common/Button/MyButton";
import Header from "../../common/Header/Header";
import './Register.css'

const Register = () => {

    const baseUrl = "http://localhost:5000/api";
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

   

    function register(){
        axios.post( baseUrl + '/user/signup', {
            name: name,
            email: email,
            password: password
        })
        .then(res => navigate("/login"))
        .catch(err => console.log(err))
    }


    return(
        <div className="">
            <Header />
            <div className="model-container">
            <div className="model-card">
                <div className="form">
                    <span>Register</span>
                    <div className="login-group">
                        <label htmlFor="">Nombre:</label>
                        <input 
                            type="text"
                            placeholder="Nombre"
                            onChange={(e)=> setName(e.target.value)}
                        />
                    </div>
                    <div className="login-group">
                        <label htmlFor="">Email:</label>
                        <input 
                            type="text"
                            placeholder="Ejemplo@gmail.com"
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login-group">
                        <label htmlFor="">Contraseña:</label>
                        <input 
                            type="password"
                            placeholder="Contraseña"
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    
                    <MyButton title={'Registrarme'} onClick={()=> register()}/>
                    <p>Ya tienes una cuenta? <Link to={'/login'} className="link">Ingresar</Link> </p>
                </div>
            </div>
        </div>
        </div>
        
    )
}
export default Register;