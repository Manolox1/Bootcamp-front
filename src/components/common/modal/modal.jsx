import React from 'react';
import './modal.css'

const Modal = ({visible, onClose, children}) =>{

    return(
        visible &&
        <div className="modal-container" onClick={onClose}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;