import {useState, useEffect} from 'react'
import Header from './components/Header'
import StatusBar from './components/StatusBar'
import TodoList from './components/TodoList'
import AddForm from './components/AddForm'
import Trash from './components/Trash'
import './App.css'


const App = () => {
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('')
  const [status, setStatus] = useState('all')
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')))
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])
  

  return (
    <div className='App'>
      <div className="todo-container">
        <Header todos={todos}/>
        <StatusBar setStatus={setStatus} status={status} setSearchText={setSearchText} searchText={searchText}/>
        <TodoList todos={todos} setTodos={setTodos} status={status} searchText={searchText}/>
        <AddForm setTodos={setTodos} setTodoText={setTodoText} todoText={todoText}/>
        <Trash status={status} setStatus={setStatus} />
      </div>
    </div>
  )
}

export default App