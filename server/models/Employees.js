const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    first_name: String,
      last_name: String,
      email: String,
      phone: String,
      birthday: String,
      hire_date: String,
      employee_notes: [employeeNotesSchema],
      collections: [collectionSchema],
  });

  const employeeNotesSchema = new mongoose.Schema({
    employeeNotes_name: String,
    employeeNotes_description: String,
    });

    const collectionSchema = new mongoose.Schema({
        collection_id: mongoose.Schema.Types.ObjectId,
        collection_name: String,
        collection_correctiveActions: [correctiveActionSchema],collection_positives: [positiveSchema],
      });

      const positiveSchema = new mongoose.Schema({
        positive_name: String,
        positive_pictures: String,
        positive_description: String,
        });

        const correctiveActionSchema = new mongoose.Schema({
            correctiveAction_name: String,
            correctiveAction_pictures: String,
            correctiveAction_description: String,
            });
        


  const Employee= mongoose.model('Employee', employeeSchema);
  const EmployeeNotes = mongoose.model('EmployeeNotes', employeeNotesSchema);
    const Collection = mongoose.model('Collection', collectionSchema);
    const CorrectiveAction = mongoose.model('CorrectiveAction', correctiveActionSchema);
    const Positive = mongoose.model('Positive', positiveSchema);

  module.exports = {
    Employee, EmployeeNotes, Collection, CorrectiveAction, Positive
  }