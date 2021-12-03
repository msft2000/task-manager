import React from "react";
import '../css/TodoList.css';
import { TodoContext } from "../TodoContext";
function TodoList(props){
    const {searchedTodos,completedTodos, totalTodos, deleteCompletedTodos}=React.useContext(TodoContext);
    const deleteTodos = ()=>{
        deleteCompletedTodos();
    }
    return(
        <section className="todo-list">
            <div className="todo-list--encabezado">
                <p>Task</p>
                <p>Completed</p>
                <p>Delete</p>
            </div>
            {!searchedTodos.length && <p className="no-tasks-text">Add a new task!</p>}
            <ul>
                {props.children}
            </ul>
            <div className="todo-list--footer">
                <p><span
                onClick={deleteTodos}
                className="Icon-todo-delete-footer"
                ></span>Delete Completed</p>
                <p>Pending Tasks: {totalTodos-completedTodos}</p>
            </div>
        </section>
    );
}
export { TodoList };