import React from 'react'
import Button from '../Button'

const StatusBar = ({ setStatus, status, searchText, setSearchText }) => {
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    const searchHandler = (e) => {
        setSearchText(e.target.value)
    }
    return (
        <div>
            <div>
                <Button value='all' onClick={statusHandler} activeBtn={status === 'all' && true}>All</Button>
                <Button value='active' onClick={statusHandler} activeBtn={status === 'active' && true}>Active</Button>
                <Button value='done' onClick={statusHandler} activeBtn={status === 'done' && true}>Done</Button>
            </div>
            <input type="text" placeholder="search" value={searchText} onChange={searchHandler}/>
        </div>
    )
}

export default StatusBar