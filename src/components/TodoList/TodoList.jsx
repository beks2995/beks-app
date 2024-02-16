import React from 'react'
import Todo from '../Todo'

const TodoList = ({todos, setTodos, status, searchText}) => {
    let filtererTodos

    if(status === 'active'){
        filtererTodos = todos.filter(el => el.isActive && !el.isDeleted)
    } else if(status === 'done'){
        filtererTodos = todos.filter(el => !el.isActive && !el.isDeleted)
    } else if(status === 'trash'){
        filtererTodos = todos.filter(el => el.isDeleted)
    } else {
        filtererTodos = todos.filter(el => !el.isDeleted && el.todoText.includes(searchText)) //el.todoText.includes(searchText)
    }
    
    return (
        <ul>
            {filtererTodos.map(todo => (
               <Todo todoObj={todo} key={todo.id} setTodos={setTodos} status={status}/> 
            ))}
        </ul>
    )
}

export default TodoList