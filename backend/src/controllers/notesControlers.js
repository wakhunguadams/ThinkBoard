import Note from "../models/Note.js";


export async function getAllNotes(_,res){
    try {
        const notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("error in getting controllers", error);
        res.status(500).json({message: "internal server error"});
    }
};

export async function getNotesById(req,res){
    try {
        const note = await Note.findById(req.params.id);
        res.status(200).json(note)
    } catch (error) {
        console.error("error in getting note controllers", error);
        res.status(500).json({message: "internal server error"});
    }
}

export async function createNote(req,res){
    try {
        const {title, content} = req.body
        const newNote = new Note({title, content})
        const savedNote = await newNote.save()
        res.status(201).json(savedNote)
    } catch (error) {
        console.error("Error in getallnotes contollers", error);
        res.status(500).json({message: "internal server error"});
    }
}

export async function updateNote(req,res){
    try {
        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content});
        if(!updatedNote) return res.status(404).json({message: "Note not found"});
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in updatenote contollers", error);
        res.status(500).json({message: "internal server error"});
    }
}

export  const deleteNote = async (req,res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote) return res.status(404).json({message: "Note not found"});
        res.json({message: "Note deleted successfully!"})
    } catch (error) {
        
    }
}
