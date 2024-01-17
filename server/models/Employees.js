const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    first_name: String,
      last_name: String,
      email: String,
      phone: String,
      employee_notes: [employeeNotesSchema],
      collections: [collectionSchema],
  });

  const employeeNotesSechema = new mongoose.Schema({
    employeeNotes_name: String,
    employeeNotes_description: String,
    });
    const collectionSchema = new mongoose.Schema({
        collection_id: mongoose.Schema.Types.ObjectId,
        collection_name: String,
        collection_correctiveActions: [correctiveActionSchema],collection_positives: [positiveSchema],
      });

  const Employee= mongoose.model('Employee', employeeSchema);

  module.exports = Employee;