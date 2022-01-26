import React from "react";
import {Link} from 'react-router-dom';
import MyButton from "../../common/Button/MyButton";
import Header from "../../common/Header/Header";
import './Register.css'

const Register = () => {
    return(
        <div className="">
            <Header />
            <div className="model-container">
            <div className="model-card">
                <form action="">
                    <span>Register</span>
                    <div className="login-group">
                        <label htmlFor="">Nombre</label>
                        <input type="text" 
                            placeholder="nombre:"
                        />
                    </div>
                    <div className="login-group">
                        <label htmlFor="">Email</label>
                        <input type="text"
                            placeholder="Contraseña:"
                        />
                    </div>
                    <div className="login-group">
                        <label htmlFor="">Contraseña</label>
                        <input type="password"
                            placeholder="Contraseña:"
                        />
                    </div>
                    <div className="login-group">
                        <label htmlFor="">Repetir Contraseña</label>
                        <input type="password"
                            placeholder="Contraseña:"
                        />
                    </div>
                    
                    <MyButton title={'Registrarme'}/>
                    <p>Ya tienes una cuenta? <Link to={'/login'} className="link">Ingresar</Link> </p>
                </form>
            </div>
        </div>
        </div>
        
    )
}
export default Register;