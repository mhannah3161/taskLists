const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    birthday: String,
    hire_date: String,
    employee_notes: [employeeNotesSchema],
    positive: [positiveSchema],
    correctiveActions: [correctiveActionSchema],
    employeeToDo: [employeeToDoSchema],
});

const employeeToDoSchema = new mongoose.Schema({
    employeeToDo_name: String,
    employeeToDo_description: String,
});

const employeeNotesSchema = new mongoose.Schema({
    employeeNotes_name: String,
    employeeNotes_description: String,
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



const Employee = mongoose.model('Employee', employeeSchema);
const EmployeeToDo = mongoose.model('EmployeeToDo', employeeToDoSchema);
const EmployeeNotes = mongoose.model('EmployeeNotes', employeeNotesSchema);
const CorrectiveAction = mongoose.model('CorrectiveAction', correctiveActionSchema);
const Positive = mongoose.model('Positive', positiveSchema);

module.exports = {
    Employee, EmployeeNotes, CorrectiveAction, Positive, EmployeeToDo
}