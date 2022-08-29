const fs = require('fs');
const path = require('path');

const express = require('express');
// const { store } = require('./db/store');


// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



// function filterByQuery(query, notesArray) {
//   let noteArray = [];
//   let filteredResults = notesArray;
//   if (query.notes) {
//     if (typeof query.notes === 'string') {
//       notes = [query.notes];
//     } else {
//       notesArray = query.notes;
//     }
//     notesArray.forEach(note => {
//       filteredResults = filteredResults.filter(
//         note => note.notes.indexOf(note) !== -1
//       );
//     });
//   }

// }

// function findById(id, notesArray) {
//   const result = notesArray.filter(note => note.id === id)[0];
//   return result;
// }

// function createNewNote(body, notesArray) {
//   const note = body;
//   dbArray.push(note);
//   fs.writeFileSync(
//     path.join(__dirname, './db/db.json'),
//     JSON.stringify({ notes: notesArray }, null, 2)
//   );
//   return note;
// }

app.get('/api/notes', (req, res) => {
 store
 .getNotes()
 .then((notes) => {
   return res.json(notes);
 })
 .catch((err) => res.status(500).json(err));
});

// app.get('/api/notes/:id', (req, res) => {
//   const result = findById(req.params.id, notes);
//   if (result) {
//     res.json(result);
//   } else {
//     res.send(404);
//   }
// });

app.post('/api/notes', (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// app.get('/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/notes.html'));
// });

// app.get('/store', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/store.html'));
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
  