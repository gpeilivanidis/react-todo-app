import React from 'react'
import TodoItem from './TodoItem';

const TodoList = (props) => {

  let todos = props.todos;
  todos = todos.map( todo => (
    <TodoItem
     todo={todo}
     key={todo.id}
     onDoubleClick={props.onDoubleClick}
     onDelete={props.onDelete}
     id={todo.id}/>
  ))
  
  return (
    <ul className="todo-list">
      {todos}
    </ul>
  )
}

export default TodoList