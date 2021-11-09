import React from "react";
import '../css/CreateTodoButton.css';
function CreateTodoButton({setOpenModal}){
    const onClickFunction = () => {
        setOpenModal(true);
    }
    return(
        <button
            onClick={onClickFunction}
            className="CreateTodoButton"
        >
            &#10133;
        </button>
    );
}
export { CreateTodoButton };