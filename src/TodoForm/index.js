import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        // cerrar el modal
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    //estado local para el valor del textarea
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false); //cerran el formulario al dar click en agregar 
    }

    const onCancel = () => {
        setOpenModal(false); //cerran el formulario al dar click en cancelar
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit = {onSubmit}>

            <label>Escribe tu nuevo TODO</label>
            <textarea
              placeholder = "Cortar cebolla para el almuerzo"j
              value = {newTodoValue}
              onChange = {onChange}
            />
            <div className = "TodoForm-buttonContainer">
                <button
                    className = "TodoForm-button TodoForm-button--cancel"
                    type = "button"
                    onClick = {onCancel}
                >
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