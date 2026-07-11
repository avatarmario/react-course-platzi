import React from 'react';
import './TodoForm.css';

function TodoForm() {
    return (
        <form onSubmit = {(event) => {
            event.preventDefault();
            console.log('Submit')}}>

            <label>Escribe tu nuevo TODO</label>
            <textarea
              placeholder = "Cortar cebolla para el almuerzo"
            />
            <div className = "TodoForm-buttonContainer">
                <button
                    className = "TodoForm-button TodoForm-button--cancel"
                    type = "submit">
                    Cancelar
                </button>
                <button
                    className = "TodoForm-button TodoForm-button--add"
                    type = "submit">
                    Agregar
                </button>
            </div>
        </form>
    )
}

export { TodoForm };