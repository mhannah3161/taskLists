const db = require('../config/connection');
const { User, Employee,  } = require('../models');
const cleanDB = require('./cleanDB');

const employeeData = require('.employeeData/.json');
const userData = require('./userData.json');

db.once('open', async () => {
  await cleanDB('Employee', 'EmployeeInformaton');

  await EmployeeInfo.insertMany(employeeData);

  console.log('Employees seeded!');
});
db.once('open', async () => {
  await cleanDB('User', 'UserInformation');

  await User.insertMany(userData);

  console.log('Users seeded!');
  process.exit(0);
});