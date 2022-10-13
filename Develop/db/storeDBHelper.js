const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const dbPath = path.join(__dirname, 'db.json');

function fetchNotes() {
    const rawNotes = fs.readFileSync(dbPath, { encoding: 'utf-8' });
    const jsonNotes = JSON.parse(rawNotes)['notes'];
    return jsonNotes;
}

function saveNote(noteData) {
    const newNote = {
        ...noteData,
        id: crypto.randomUUID()
    }
    const allNotes = fetchNotes();
    allNotes.push(newNote);
    const data = {
        notes: allNotes
    }
    fs.writeFileSync(dbPath, JSON.stringify(data), 'utf-8');
    return fetchNotes()
}

module.exports = {
    fetchNotes,
    saveNote
}