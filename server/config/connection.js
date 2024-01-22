const { connect, connection } = require('mongoose');

MONGOOSE.connect(process.env.MONGO_URI)

MONGOOSE.connect('mongodb://127.0.0.1:27017/taskListsDB');

module.exports = connection;