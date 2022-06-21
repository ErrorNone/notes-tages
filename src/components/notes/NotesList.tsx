import React, { FC } from "react";
import { Accordion } from "react-bootstrap";
import { INotes, ITages } from "../../types/types";
import NotesItem from "./NotesItem";

interface NotesListProps {
  notes: INotes[];
  tages: ITages[];
  deliteNotes: (id: number) => void;
  correctedNotes: (id: number, correctedNote: any) => void;
}

const NotesList: FC<NotesListProps> = ({
  notes,
  tages,
  deliteNotes,
  correctedNotes,
}) => {
  return (
    <Accordion>
      {notes.map((note, index) => (
        <NotesItem
          correctedNotes={correctedNotes}
          deliteNotes={deliteNotes}
          key={note.id}
          note={note}
          tages={tages}
          index={index}
        />
      ))}
    </Accordion>
  );
};

export default NotesList;
