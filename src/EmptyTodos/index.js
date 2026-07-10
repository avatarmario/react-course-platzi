import React from 'react'
// import './EmptyTodos.css';

function EmptyTodos() {

   return (
        <li className = "EmptyTodos">
            <span className = "EmptyTodos-icon"></span>
            <p className = "EmptyTodos-text">Crea tu primer TODO!</p>

        </li>
   );
}

export { EmptyTodos }; 