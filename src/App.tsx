import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NotesList from "./components/notes/NotesList";
import { INotes, ITages } from "./types/types";
import NotesAdd from "./components/notes/NotesAdd";
import Loader from "./components/loader/Loader";

function App() {
  const [notes, setNotes] = useState<INotes[]>([]);
  const [tages, setTages] = useState<ITages[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchNotes();
    fetchTages();
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  async function fetchNotes() {
    try {
      const response = await axios.get<INotes[]>(
        "https://notes-tages.herokuapp.com/notes"
      );
      setNotes(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchTages() {
    try {
      const response = await axios.get<ITages[]>(
        "https://notes-tages.herokuapp.com/tages"
      );
      setTages(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const addNote = (newNote: any) => {
    setNotes([...notes, newNote]);
  };

  const deliteNotes = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const correctedNotes = (id: number, correctedNote: any) => {
    setNotes(notes.map((note) => (note.id === id ? correctedNote : note)));
  };

  return (
    <Container className="my-5">
      {loading ? (
        <Loader />
      ) : notes.length ? (
        <div>
          <h1 className="text-primary text-center mb-4">Notes & tages</h1>
          <NotesAdd addNote={addNote}/>
          <NotesList 
          deliteNotes={deliteNotes}
          correctedNotes={correctedNotes}
          notes={notes}
          tages={tages} 
          />
        </div>
      ) : (
        <div>
          <NotesAdd addNote={addNote} />
          <h2>У вас нет не одной заметки!</h2>
        </div>
      )}
    </Container>
  );
}

export default App;
