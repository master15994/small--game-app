import React from 'react';
import { useState } from 'react';
import a from './App.module.css'
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';



const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'First todo',
      status: true
    },
    {
      id: 2,
      title: 'Second todo',
      status: true
    },
    {
      id: 3,
      title: 'Third todo',
      status: false
    }
  ])

  return (
    <div className={a.wrapper}>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App;
