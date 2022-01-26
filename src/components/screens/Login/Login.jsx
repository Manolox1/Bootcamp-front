import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../../common/Button/MyButton";
import Header from "../../common/Header/Header";
import './Login.css';

const Login = () => {

    return(
        <div className="">
            <Header />

<div className="model-container">
    <div className="model-card">
        <form action="">
            <span>Login</span>
            <div className="login-group">
                <label htmlFor="">Nombre</label>
                <input type="text" 
                    placeholder="Nombre:"
                />
            </div>
            <div className="login-group">
                <label htmlFor="">Contraseña</label>
                <input type="password"
                    placeholder="Contraseña:"
                />
            </div>
            
            <MyButton title={'Continuar'}/>
            <p>Todavia no tienes una cuenta? <Link to={'/register'} className="link">Registrate</Link> </p> 
        </form> 
    </div>
</div>  
        </div>
        
    )
}

export default Login;