import React, { FC } from "react";
import { Accordion } from "react-bootstrap";
import { INotes } from "../../types/types";
import NotesItem from "./NotesItem";

interface NotesListProps {
  notes: INotes[];
  deliteNotes: (id: number) => void;
  correctedNotes: (id: number, correctedNote: any) => void;
}

const NotesList: FC<NotesListProps> = ({ notes, deliteNotes, correctedNotes }) => {
  return (
    <Accordion>
      {notes.map((note, index) => (
        <NotesItem
        correctedNotes={correctedNotes}
          deliteNotes={deliteNotes}
          key={note.id}
          note={note}
          index={index}
        />
      ))}
    </Accordion>
  );
};

export default NotesList;
