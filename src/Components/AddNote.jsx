import React, { useState } from 'react'

const AddNote = ({handleaddNote}) => {
    const [noteText,setnoteText] = useState('')

    const charLimit = 200;

    const handleChange = (e) =>{
        if(charLimit - e.target.value.length >= 0){
            setnoteText(e.target.value);
        }
    }

    const handlesaveClick = () =>{ 
        if(noteText.trim().length > 0){
            handleaddNote(noteText);
            setnoteText('')
        }
    }
   
  return (
    <div className='note new'>
        <textarea className="" id="" cols="10" rows="8" placeholder='Type to add note' value={noteText} onChange={handleChange}></textarea>
        <div className="note-footer">
            <small>{charLimit - noteText.length} remaining</small>
            <button className='save' onClick={handlesaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote