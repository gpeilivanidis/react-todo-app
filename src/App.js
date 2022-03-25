import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {

  const initialTodo = {
    title: '',
    description: '',
    date: '',
    reminder: false,
    id: Math.round(Math.random() * 10000)
  };

  const [isAdd, setIsAdd] = useState(true);
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(initialTodo);

  const toggle = () => {
    setIsAdd(!isAdd);
  }

  const handleFormChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = name === "reminder" ? target.checked : target.value;

    setCurrentTodo({
      ...currentTodo,
      [name]: value
    });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setTodos([...todos, currentTodo]);
    setCurrentTodo(initialTodo);
  }

  const handleDoubleClick = (e) => {

    const target = e.currentTarget;

    if(target.className.includes('todo-item')){

      const id = target.id;
      let copy = [...todos];
      
      copy = copy.map(todo => {

        if(todo.id == id){
          todo.reminder = !todo.reminder;
        }

        return todo;
      });

      setTodos(copy);
    }
  } 

  const handleDelete = (e) => {
    const target = e.currentTarget.parentElement;
    const id = target.id;
    let copy = [...todos];
    
    copy = copy.filter(todo => todo.id != id);

    setTodos(copy);
  }
  
  return (
    <main>
      <div className="container">
        <Header isAdd={isAdd} toggle={toggle} />
        {!isAdd && <Form
         onSubmit={handleFormSubmit}
         onChange={handleFormChange}
         currentTodo={currentTodo} />}
        <TodoList todos={todos} onDoubleClick={handleDoubleClick} onDelete={handleDelete} />
      </div>
    </main>
  );
}

export default App;
