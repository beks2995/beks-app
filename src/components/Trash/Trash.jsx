import React from 'react'
import Button from '../Button'

const Trash = ({setStatus ,status}) => {
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
  return (
    <div>
        <Button value='trash' onClick={statusHandler} activeBtn={status === 'trash' && true}>Trash</Button>
    </div>
  )
}

export default Trash