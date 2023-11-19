import { Note as NoteModel } from "../models/note";
import { Card } from "react-bootstrap";
import styles from "../style/Note.module.css";
import { formateDate } from "../utils/formateDate";

interface NoteProps {
  note: NoteModel;
  className?: string;
}

const Note = ({ note, className }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;

  let createdUpdatedText: string;

  //Checking weather created New Note or Update the note.

  if (updatedAt > createdAt) {
    createdUpdatedText = "Updated : " + formateDate(updatedAt);
  } else {
    createdUpdatedText = "Created : " + formateDate(createdAt);
  }

  return (
    <Card className={`${styles.noteCard} ${className}`}>
      <Card.Body className={styles.cardBody}>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{createdUpdatedText}</Card.Footer>
    </Card>
  );
};

export default Note;
