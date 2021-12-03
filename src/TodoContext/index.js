import React from 'react';
import { useLocalStorage } from "../customHooks/useLocalStorage";
const TodoContext = React.createContext();
function TodoProvider (props) {
    const [todos,saveTodos] = useLocalStorage('TODOS_V1',[]);
    const [searchValue,setSearchValue] = React.useState('');
    const [openModal,setOpenModal] = React.useState(false);
    const completedTodos = todos.filter(todo=>todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos = [];
    const deleteCompletedTodos = () => {
        const auxTodos=[];
        todos.forEach(todo => {
            if(todo.completed===false){
                auxTodos.push(todo);
            }
        });
        saveTodos(auxTodos);
    }
    if(searchedTodos.length){
        searchedTodos=todos;
    }else{
        searchedTodos=todos.filter(todo=>todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    }

    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text===text);
        const auxTodos=[...todos];
        auxTodos[todoIndex].completed=!auxTodos[todoIndex].completed;
        saveTodos(auxTodos);
    }

    const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text===text);
        const auxTodos=[...todos];
        auxTodos.splice(todoIndex, 1);
        saveTodos(auxTodos);
    }
    const addTodo = (text) => {
        const auxTodos=[...todos];
        auxTodos.push({text,completed:false});
        saveTodos(auxTodos);
    }
    return(
        <TodoContext.Provider value={{
            totalTodos,
            addTodo,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal,
            deleteCompletedTodos
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}export { TodoContext,TodoProvider }