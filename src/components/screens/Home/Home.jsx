import React, { useState } from "react";
import Header from "../../common/Header/Header";
import './Home.css';
import MyButton from "../../common/Button/MyButton";
import Modal from "../../common/modal/modal";

const Home = () => {

    const [modalVisible, setModalVisible] = useState(true);
    const [balance, setBalance] = useState('');

    return(
        <div className="">
            <Header />
            <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
                <span>Ingrese el monto a cargar</span>
                <input type="number" 
                    placeholder="Monto:"
                    value={balance}
                    onChange={(value) => setBalance(value)}
                />
                <MyButton title={'Transferir'} onClick={() => setModalVisible(false)}/>
            </Modal>
            

            <div className="balance">
                <div className="container-bal">
                    <span>Historial de Transferencia</span>
                    <div className="tabla">
                        
                    </div>
                    <MyButton title={'open modal'} onClick={() => setModalVisible(true)}/>   
                </div>
            </div>
        </div>
    )
}

export default Home;