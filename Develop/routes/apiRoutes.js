const router = require('express').Router();
const storeDBHelper = require('../db/storeDBHelper');

// GET - fetch all notes from DB
router.get('/notes', (req, res) => {
  const allNotes = storeDBHelper.fetchNotes();
  console.log('allnotes route', allNotes)
  res.json(allNotes);
});

// POST - save note to DB
router.post('/notes', (req, res) => {
  const noteData = req.body;
  storeDBHelper.saveNote(noteData);
  res.json(200);
});

// DELETE - delete note with given ID
router.delete('/notes/:id', (req, res) => {
  // get ID from request parameters
  const IDOfNoteToDelete = req.params.id;
  storeDBHelper
    .deleteNote(IDOfNoteToDelete)
    .then(() => res.status(200))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
