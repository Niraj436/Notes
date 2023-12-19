import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NoteList = ({ notes, handleaddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note, i) => (
      <Note key={i} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />
      ))}
      <AddNote handleaddNote={handleaddNote} />
    </div>
  );
};

export default NoteList;
