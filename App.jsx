import  React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*

function App() {
  const[todo, setTodo] = useState({
    id: 1,
    title: 'Gym',
    description: 'Go to gym from 5-6'
  })

  //console.log('render');
  setInterval(() => {
    setTodo({
      id: 2,
      title: 'Freelancing',
      description: 'Do 4 hours of freelancing today' + Math.random()
    });
  }, 3000);

  return (
    <>
    <h1>Title {todo.title}</h1>
    <br></br>
    <h1>Description {todo.description}</h1>
    <br></br>
    <h1>ID {todo.id}</h1>
    <br></br>
    </>
  )
}

*/

/*
function App(){
  const[todos, setTodos] = useState([{
    id: 1,
    title: 'Freelancing',
    description: 'Do 4 hours of freelancing'
  }, {
    id: 2,
    title: 'Gym',
    description: 'Go gym daily from 5-6pm'
  }]);

  
  setInterval(() => {
    setTodos(
      [
        {
          id: 1,
          title: 'Freelancing',
          description: 'Do 4 hours of freelancing' + Math.random()
        }, {
          id: 2,
          title: 'Gym',
          description: 'Go gym daily from 5-6pm' + Math.random()
        }
      ]
    )
  }, 1000)

  return (
    <div>
      {
        todos.map((todo) => {
          return <div>
          {todo.title}
          {todo.description}
          <br />
          </div>
        })
      }
    </div>
  )
}

*/

//hook

/*function useTodos(){
  const[todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET"
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setTodos(data);
      })
    });

    setInterval(() => {
      fetch("http://localhost:3000/todos", {
        method: "GET"
      }).then((response) => {
        response.json().then((data) => {
          console.log(data);
          setTodos(data);
        })
      });
    }, 1000)
  }, [])

  return todos;
}

function App(){
  const todos = useTodos();

  return (
    <div>
      {
        todos.map((value) => {
          return <>
          {todos.title}
          <br></br>
          {todos.description}
          <br></br>
          <button>Delete</button>
          <br></br>
          </>
        })
      }
    </div>
  )
}
*/

export default App
