import React, { FC, useState } from "react";
import { Accordion, CloseButton } from "react-bootstrap";
import { INotes } from "../../types/types";
import ModalNotesCorrected from "./ModalNotesCorrected";
import "./NotesItem.scss";

interface NotesItemProps {
  note: INotes;
  index: number;
  deliteNotes: (id: number) => void;
  correctedNotes: (id: number, correctedNote: any) => void;
}

const NotesItem: FC<NotesItemProps> = ({ note, index, deliteNotes, correctedNotes }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Accordion.Item eventKey={"" + index}>
      
        <Accordion.Header>
          {note.title} <h6 className="mb-0  mx-3">#Lorem</h6>
          <CloseButton
            style={{ zIndex: 1000, right: 5 }}
            className="position-absolute top-50 translate-middle"
            onClick={() => deliteNotes(note.id)}
          />

          <button
            onClick={handleShow}
            style={{ zIndex: 1000, right: 40 }}
            className="position-absolute top-50 translate-middle btn-corrected"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </button>
        </Accordion.Header>
        <Accordion.Body>{note.body}</Accordion.Body>
      </Accordion.Item>
      <ModalNotesCorrected
        correctedNotes={correctedNotes}
        handleClose={handleClose}
        show={show}
        note={note}
      />
    </>
  );
};

export default NotesItem;
