import React, { FC, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { INotes } from "../../types/types";

interface ModalNotesCorrectedProps {
  show: boolean;
  handleClose: () => void;
  correctedNotes: (id: number, correctedNote: any) => void;
  note: INotes;
}

const ModalNotesCorrected: FC<ModalNotesCorrectedProps> = ({
  show,
  handleClose,
  correctedNotes,
  note,
}) => {
  const [titleEdit, setTitleEdit] = useState(`${note.title}`);
  const [bodyEdit, setBodyEdit] = useState(`${note.body}`);

  const editNotes = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const newNotes = {
      id: Date.now(),
      title: titleEdit,
      body: bodyEdit,
    };
    correctedNotes(note.id, newNotes);

    setTitleEdit("");
    setBodyEdit("");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Редактировать заметку</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Название заметки</Form.Label>
            <Form.Control
              placeholder="Введите новое название заметки..."
              value={titleEdit}
              onChange={(e) => setTitleEdit(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={bodyEdit}
              onChange={(e) => setBodyEdit(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Назад
        </Button>
        <Button variant="primary" onClick={editNotes}>
          Изменить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNotesCorrected;
