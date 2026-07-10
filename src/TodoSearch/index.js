import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
   const {
    setSearchValue,
    searchValue,
   } = React.useContext(TodoContext);

   return (
        <input 
         className = "TodoSearch"
         placeholder = "Cortar Cebolla"
         value = {searchValue}
         onChange = {(event) => {
            setSearchValue(event.target.value);
            

         }}

        />
   );
}

export { TodoSearch }; 