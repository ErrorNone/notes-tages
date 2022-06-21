import React, { FC, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { INotes, ITages } from "../../types/types";

interface ModalCorrectedProps {
  show: boolean;
  handleClose: () => void;
  correctedNotes: (id: number, correctedNote: any) => void;
  note: INotes;
  tages: ITages[];
  tagesName: string;
  setTagesName: (value: string) => void;
}

const ModalCorrected: FC<ModalCorrectedProps> = ({
  show,
  handleClose,
  correctedNotes,
  note,
  tagesName,
  setTagesName,
  tages,
}) => {
  const [titleEdit, setTitleEdit] = useState(`${note.title}`);
  const [bodyEdit, setBodyEdit] = useState(`${note.body}`);
  const [newTeg, setNewTeg] = useState(`#${tagesName}`);

  const editNotes = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const newNotes = {
      id: Date.now(),
      title: titleEdit,
      body: bodyEdit,
    };
    setTagesName(newTeg);
    correctedNotes(note.id, newNotes);

    setTitleEdit("");
    setBodyEdit("");
    setNewTeg("");
  };
  
  console.log(newTeg);
  

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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Добавить тег</Form.Label>
            <div className="d-flex">
              <Form.Control
                className="rounded-0 rounded-start"
                placeholder="Введите тег..."
                value={newTeg}
                onChange={(e) => setNewTeg(e.target.value)}
              />
              <Button className="rounded-0 rounded-end" variant="primary">
                Добавить
              </Button>
            </div>
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

export default ModalCorrected;
