import React from "react";
import { TodoContext } from "../TodoContext/index.js";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
function AppUI(){
    const { searchedTodos,completeTodos,deleteTodos,openModal,setOpenModal} = React.useContext(TodoContext);
    return(
    <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />
        <TodoList>
          {searchedTodos.map(todo=>(
            !todo.completed && 
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onComplete={()=>completeTodos(todo.text)}
              onDelete={()=>deleteTodos(todo.text)}/>
          ))}
          {searchedTodos.map(todo=>(
            todo.completed && 
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={()=>completeTodos(todo.text)}
              onDelete={()=>deleteTodos(todo.text)}/>
            ))}
        </TodoList>
        {openModal && <Modal>
          <TodoForm />
        </Modal>}
      </React.Fragment>);
}
export { AppUI };