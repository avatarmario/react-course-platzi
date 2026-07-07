import {CompleteIcon} from './CompleteIcon'
import {DeleteIcon} from './DeleteIcon'

import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className = "TodoItem"> 
      {/* <span 
        className = {`Icon TodoItem-check ${props.completed && "TodoItem-check--active"}`}
        //clase 10 completar todos con eventos
        onClick = {props.onComplete}
      >
        V
      </span> */}

      <CompleteIcon completed = {props.completed} onComplete = {props.onComplete}/>

      <p className = {`TodoItem-text ${props.completed && "TodoItem-text--completed"}`}>{props.text}</p>

      <DeleteIcon onDelete = {props.onDelete} />

      {/* <span 
        className = {`Icon TodoItem-delete`}
        //clase 10: eliminar todos con eventos
        onClick = {props.onDelete}
       >
        X
       </span> */}
    </li>
  );
}

export { TodoItem };