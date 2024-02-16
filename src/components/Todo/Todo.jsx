import React from 'react'
import Button from '../Button'
import './Todo.css'
import {useState} from 'react'

const Todo = React.memo(({ todoObj, setTodos, status }) => {
    const [isSafe, setIsSafe] = useState()
    const doneHandler = () => {
        setTodos((prev) => prev.map((el) => el.id === todoObj.id ? { ...el, isActive: !el.isActive } : el))
    }
    const deleteOrRestoreHandler = () => {
        setTodos((prev) => prev.map((el) => el.id === todoObj.id ? { ...el, isDeleted: !el.isDeleted } : el))
    }
    const deleteHandler = () => {
        setTodos((prev) => prev.filter((el) => el.id !== todoObj.id))
    }
    const editHandler = () => {
        setTodos((prev) => prev.map((el) => el.id === todoObj.id ? { ...el, isEditing: !el.isEditing } : el ))
    }
    const inputChangeHandler = (e) => {
        setTodos((prev) => prev.map((el) => el.id === todoObj.id ? 
        { ...el, todoText: e.target.value} : el ))
    }
    return (
        <li>
            <input 
            type='text' 
            className={`todo-text active ${todoObj.isActive ? '' : 'done'}`} 
            value={todoObj.todoText} 
            readOnly={!todoObj.isEditing}
            onChange={inputChangeHandler}
            />
            {
                status !== 'trash' ?
                    <div>
                        <Button onClick={doneHandler}>done</Button>
                        {
                            todoObj.isActive && !todoObj.isDeleted &&
                            <Button onClick={editHandler} isSafe={isSafe} setIsSafe={setIsSafe}>
                            {todoObj.isEditing ? 'save' : 'edit'}</Button>
                        }
                        <Button onClick={deleteOrRestoreHandler}>delete</Button>
                    </div>
                    :
                    <div>
                        <Button onClick={deleteOrRestoreHandler}>restore</Button>
                        <Button onClick={deleteHandler}>delete</Button>
                    </div>
            }
        </li>
    )
})

export default Todo