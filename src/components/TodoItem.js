import React from 'react'

const TodoItem = ({todo, onDoubleClick, onDelete}) => {
  return (
    <li
     className={todo.reminder ? 'reminder todo-item' : 'todo-item'}
     id={todo.id}
     onDoubleClick={onDoubleClick}>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>{todo.date}</p>
      <button className="btn-delete" onClick={onDelete}>X</button>
    </li>
  )
}

export default TodoItem