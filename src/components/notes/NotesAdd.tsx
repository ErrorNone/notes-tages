import React, { FC,  useState } from "react";
import { Button, Form } from "react-bootstrap";

interface NotesAddProps {
  addNote: (newNote: any) => void;
 
}

const NotesAdd: FC<NotesAddProps> = ({addNote}) => {
  const [titleInput, setTitleInput] = useState("");

  const createNotes = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const newNotes = {
      id: Date.now(),
      title: titleInput,
      body: "",
    };
    addNote(newNotes);
   
    setTitleInput("");
  };

  return (
    <>
      <Form
        onSubmit={createNotes}
        className="w-100"
      >
        <Form.Group
          className="d-flex mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            placeholder="Напишете заметку..."
            className="rounded-0 rounded-start"
            value={titleInput}
            onChange={e => setTitleInput(e.target.value)}
          />
          <Button
            type="submit"
            className="rounded-0 rounded-end"
            variant="primary"
            onClick={createNotes}
          >
            Добавить
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default NotesAdd;
