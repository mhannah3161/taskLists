const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    notes: [Notes]
    toDo: [ToDo]
}
type Notes {
    _id: ID
    notes_name: String
    notes_description: String
}
type ToDo {
    _id: ID
    toDos_name: String
    toDos_description: String
}
type Employee {
    _id: ID
    first_name: String
    last_name: String
    email: String
    phone: String
    birthday: String
    hire_date: String
    employee_notes: [EmployeeNotes]
    positive: [Positive]
    correctiveActions: [CorrectiveAction]
}
type EmployeeNotes {
    _id: ID
    employeeNotes_name: String
    employeeNotes_description: String
}
type Positive {
    _id: ID
    positive_name: String
    positive_pictures: String
    positive_description: String
}
type CorrectiveAction {
    _id: ID
    correctiveAction_name: String
    correctiveAction_pictures: String
    correctiveAction_description: String
}
type EmployeeToDo { 
    _id: ID
    employeeToDo_name: String
    employeeToDo_description: String
}
`;