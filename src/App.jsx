import React, { useEffect, useState } from "react";
import NoteList from "./Components/NoteList";
import { nanoid } from "nanoid";
import { Search } from "./Components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is first note",
      date: "09/14/2023",
    },
    {
      id: nanoid(),
      text: "This is second note",
      date: "09/14/2023",
    },
    {
      id: nanoid(),
      text: "This is third note note",
      date: "09/14/2023",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('notes'))

    if(savedNotes){
      setNotes(savedNotes)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const [SearchNote, setSearchNote] = useState("");
  return (
    <div className="container">
      <div className="header">Notes</div>
      <Search handleSearchNote={setSearchNote} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLocaleLowerCase().includes(SearchNote)
        )}
        handleaddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
