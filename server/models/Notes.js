const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    notes_name: String,
    notes_description: String,
  });
  
  const Notes = mongoose.model('Notes', notesSchema);

  module.exports = Notes;