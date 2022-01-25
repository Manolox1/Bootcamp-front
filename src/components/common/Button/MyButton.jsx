import React from "react";
import './MyButton.css';

const MyButton = ({title, onClick}) => {

    return(
        <button className="btn" onClick={() => onClick()}>
            {title}
        </button>
    )
}

export default MyButton;