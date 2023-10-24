import * as React from "react";
import { Card, Button } from "react-bootstrap";

import { NoteModel } from "../models/note.model";

interface INoteProps {
  note: NoteModel;
  handleDelete: (id: string) => void;
}

const Note: React.FunctionComponent<INoteProps> = ({ note, handleDelete }) => {
  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
          <Button
            className="mt-3"
            variant="danger"
            onClick={() => handleDelete(note.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Note;
