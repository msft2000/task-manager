import React from "react";
import { TodoContext } from "../TodoContext";
import "../css/TodoForm.css";
function TodoForm(){
    const [newTodoValue,setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onWritte = (event) => {
        setNewTodoValue(event.target.value);
    } 

    const onClickCancel = () => {
        setOpenModal(false);
    }  

    const onClickAdd = (event) => {
        event.preventDefault();
        setOpenModal(false);
        addTodo(newTodoValue);
    }  
    return(
        <form onSubmit={onClickAdd}>
            <label>Add a new task</label>
            <textarea
                value={newTodoValue}
                onChange={onWritte}
                placeholder="Enter a new task"
            />
            <div>
                <button
                    type="button"
                    onClick={onClickCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                >
                    Add Task
                </button>
            </div>
        </form>
    )
}
export {TodoForm};