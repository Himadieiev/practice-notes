import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { NoteModel } from "./models/note.model";
import CreateNote from "./components/CreateNote";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([
    {
      id: new Date().toString(),
      title: "Studying",
      text: "React, TS, Bootstrap",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
