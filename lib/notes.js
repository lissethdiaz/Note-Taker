const fs = require('fs');
const path = require('path');

function updateDb(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
  JSON.stringify({ notes: notesArray })
  );
      return note;
};

module.exports = updateDb