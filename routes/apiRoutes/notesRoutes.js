const router = require('express').Router();
const updateDb = require('../../lib/notes')
const { v4: uuidv4 } = require('uuid');
const { notes } = require('../../db/db.json');

router.post('/notes', (req, res) => {
  req.body.id = uuidv4();

  const newNote = updateDb(req.body, notes);
  res.json(newNote);
});

module.exports = router;