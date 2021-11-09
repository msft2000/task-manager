import React from "react";
import '../css/TodoItem.css';
function TodoItem(props){
    return(
        <li className={`TodoItem ${props.completed && 'TodoItem--complete'}`}>
            <span 
                className={`Icon-todo ${props.completed && 'Icon-todo--complete'}`}
                onClick={props.onComplete}
            >&#10004;</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span
                onClick={props.onDelete}
                className="Icon-todo-delete"
            >&#10006;</span>
        </li>
    );
}
export { TodoItem };