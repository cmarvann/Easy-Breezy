const path = require('path');
const router = require('express').Router();

// send notes.html file
router.get('/notes', (req, res) => {
  const notesHTMLPath = path.join(__dirname, '../public/notes.html');
  res.sendFile(notesHTMLPath);
});

// send index.html file
router.get('/', (req, res) => {
  const indexHTMLPath = path.join(__dirname, '../public/index.html');
  res.sendFile(indexHTMLPath);
});

module.exports = router;
