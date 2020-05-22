const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Set up route middleware
router.use(noteController.setAccessControls);

// Route to get all notes and create a new note
router
    .route('/')
    .get(noteController.findAllNotes)
    .post(noteController.createNote);

// Routes to get/update/delete note by ID
router
    .route('/:noteid')
    .get(noteController.findNote)
    .put(noteController.updateNote)
    .delete(noteController.deleteNote);

module.exports = router;
