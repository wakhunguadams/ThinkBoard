import express from "express"
import { createNote, deleteNote,getAllNotes,updateNote, getNotesById} from "../controllers/notesControlers.js";
const router = express.Router();

router.get("/",getAllNotes);
router.get("/:id",getNotesById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router





