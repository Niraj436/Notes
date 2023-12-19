import React from 'react'
import '../assets/index.css'

const Note = ({id, text, date, handleDeleteNote}) => {
  return (
    <div className='note'>
        <span>{text}</span>
        <div className="note-footer">
            <span>{date}</span>
            <i className="bi bi-trash3-fill fs-4" onClick={()=>handleDeleteNote(id)}></i>
        </div>
    </div>
  )
}

export default Note