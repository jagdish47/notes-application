import {
  getNotes,
  createNote,
  getNote,
  updateNote,
  deleteNote,
} from "../controllers/notes";
import express from "express";

const router = express.Router();

router.get("/", getNotes);
router.post("/", createNote);
router.get("/:noteId", getNote);
router.patch("/:noteId", updateNote);
router.delete("/:noteId", deleteNote);

export default router;
