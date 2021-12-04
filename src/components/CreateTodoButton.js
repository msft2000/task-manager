import React from "react";
import '../css/CreateTodoButton.css';
import signomas from "../assets/imgs/signomas1.svg";
function CreateTodoButton({setOpenModal}){
    const onClickFunction = () => {
        setOpenModal(true);
    }
    return(
        <img
            onClick={onClickFunction}
            className="CreateTodoButton"
            alt="signo mas"
            src={signomas}
        >
            {/* &#10133; */}
        </img>
    );
}
export { CreateTodoButton };