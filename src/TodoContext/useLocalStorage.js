import React from 'react';

// clase 14
function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);
  // Estados de carga y error.
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        }

        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 3000 );
    
  });

  // clase 13 
  const saveItem = (newItem) => {
    const stringifiedTodos = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedTodos);
    setItem(newItem);
  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el Curso de Intro a React.js', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'LALALALALA', completed: false},
  { text: 'Usar estados derivados', completed: true},

]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TODOS_V1'); */