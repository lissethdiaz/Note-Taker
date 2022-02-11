const router = require('express').Router();
const fs = require('fs')
const util = require('util');
const { v4: uuidv4 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

router.get('/notes', (req, res) => {
  readFileAsync('./db/db.json', 'utf8').then(data => {
    notes = [].concat(JSON.parse(data))
    res.json(notes);
  })
});

router.post('/notes', (req, res) => {
  req.body.id = uuidv4();
  const newNote = req.body;
  readFileAsync('./db/db.json', 'utf8').then( data => {
    const notes = [].concat(JSON.parse(data));
    
    notes.push(newNote);
    return notes
  }).then( notes => {
    writeFileAsync('./db/db.json', JSON.stringify(notes))
    res.json(newNote);
  })
});


module.exports = router