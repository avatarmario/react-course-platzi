import './CreateTodoButton.css';

function CreateTodoButton( {setOpenModal}) {
  return (
    <button 
      className = "CreateTodoButton"
      onClick = {
        () => {
          setOpenModal(state => !state);
        }
      }
    >
      Crear
    </button>  
  );
}

export { CreateTodoButton };