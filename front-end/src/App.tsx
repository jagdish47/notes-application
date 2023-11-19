import React, { useState, useEffect } from "react";
import { Note as NoteModel } from "./models/note";
import Note from "./components/Note";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style/NotesPage.module.css";

import * as NoteApi from "./network/notes_api";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const notes = await NoteApi.fetchNotes();
      setNotes(notes);
      console.log(notes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row xs={1} md={2} xl={3}>
        {notes.map((note) => (
          <Col key={note._id}>
            <Note note={note} className={styles.note} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
