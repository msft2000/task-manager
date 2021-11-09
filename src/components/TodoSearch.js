import React from "react";
import {TodoContext} from "../TodoContext/index.js";
import '../css/TodoSearch.css'
function TodoSearch(){
    const {searchValue,setSearchValue} = React.useContext(TodoContext)
    const onWritte = (event) => {
        setSearchValue(event.target.value)
    };
    return(
        <input 
            className="TodoSearch"
            placeholder="Search a task"
            value={searchValue}
            onChange={onWritte}
        />
    );
}
export { TodoSearch };