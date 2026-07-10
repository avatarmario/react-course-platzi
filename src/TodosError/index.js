import React from 'react'

function TodosError() {

   return (
        <li className = "TodosError">
            <span className = "Error-spinner"></span>
            <p className = "Error-text">Ocurrió un error al cargar los TODOs</p>

        </li>
   );
}

export { TodosError }; 