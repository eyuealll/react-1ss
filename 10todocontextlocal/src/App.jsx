
/* this project is A list project used customhook contextAPI 09project with localsotrage 1st create context with custom hook context/TodoContext and import in context/index and export from that 2nd app.jsx create wrapper and give the value in to the wrapper value = {} then define its function and reassign the value of todos or initial value using state useState in setTodos 3rd create a component in components folder 2 components 1 TodoForm and 2 Todoitem who has todo for iterate inputs then import those to to components/index.js then export from that 4th came to app.jsx import those two components from components/index.js then inject inside return then create map function to todoItem list because todoItem input is creating by adding item in to an array and inject todoForm above mapping function becuase eachtime in todoForm we add item then create new todoItem will create thats all read it carefully by this step  */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TodoProvider} from "./context"
import { useEffect } from 'react'
import { TodoForm, TodoItem } from './components/index'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(), ...todo} , ...prev])
  }
  const updateTodo = (id, todo ) => { 
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)) )
   }

   const deleteTodo = (id) => { 
    setTodos((prev) => prev.filter ((prevTodo) => prevTodo.id !== id))
    }

    const toggleComplete = (id) => { 
      setTodos((prev) => 
      prev.map((prevTodo) => 
      prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo
      ))
     }

     useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))
      if(todos && todos.length > 0){
        setTodos(todos)
      }
     },[])

     useEffect(() => {
       localStorage.setItem("todos", JSON.stringify(todos))
     
       
     }, [todos])
     
     
  return (
    <TodoProvider value={{todos, addTodo, updateTodo,deleteTodo, toggleComplete}}>
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
            Manage Your Todos
            </h1>
          <div className='mb-4'>
   <TodoForm />
    </div>
    <div className='flex flex-wrap gap-y-3'>
   {
    todos.map((todo) =>(
      <div key={todo.id} className='w-full'>
        <TodoItem todo={todo}/> 
      </div>
    ))}
   
   </div>

   </div>
   </div>
    </TodoProvider>
  )
}

export default App
