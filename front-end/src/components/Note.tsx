import { Note as NoteModel } from "../models/note";
import { Card } from "react-bootstrap";
import styles from "../style/Note.module.css";
import { formateDate } from "../utils/formateDate";
import { MdDelete } from "react-icons/md";
import styleUtils from "../style/utils.module.css";

interface NoteProps {
  note: NoteModel;
  onNoteClicked: (note: NoteModel) => void;
  onDeleteNoteClicked: (note: NoteModel) => void;
  className?: string;
}

const Note = ({
  note,
  onDeleteNoteClicked,
  onNoteClicked,
  className,
}: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;

  let createdUpdatedText: string;

  //Checking weather created New Note or Update the note.

  if (updatedAt > createdAt) {
    createdUpdatedText = "Updated : " + formateDate(updatedAt);
  } else {
    createdUpdatedText = "Created : " + formateDate(createdAt);
  }

  return (
    <Card
      className={`${styles.noteCard} ${className}`}
      onClick={() => onNoteClicked(note)}
    >
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styleUtils.flexCenter}>{title}</Card.Title>
        <MdDelete
          className="text-muted ms-auto"
          onClick={(e) => {
            onDeleteNoteClicked(note);
            e.stopPropagation();
          }}
        />
        <Card.Text className={styles.cardText}>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{createdUpdatedText}</Card.Footer>
    </Card>
  );
};

export default Note;
