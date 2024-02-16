import React from 'react'

const Header = ({todos}) => {
    const activeTodos = todos.filter(el => el.isActive && !el.isDeleted).length
    const doneTodos = todos.filter(el => !el.isActive && !el.isDeleted).length
    return (
        <>
            <h1>Beks Todo List</h1>
            <div>
                <span>{activeTodos} more, </span>
                <span>{doneTodos} done</span>
            </div>
        </>
    )
}

export default Header