const { notes } = require('../../db/db.json');
const router = require('express').Router();
const { createNote, validateNote} = require('../../notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;