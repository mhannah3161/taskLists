const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const isPassword = (value) => {
  return /^[a-zA-Z0-9]+$/.test(value) && value.length >= 5;
};

const toDoSchema = new mongoose.Schema({
    toDos_name: String,
    toDos_description: String,
    });

const notesSchema = new mongoose.Schema({
  notes_name: String,
  notes_description: String,
});

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 5,
      match: /^[a-zA-Z0-9]+$/,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function (value) {
          return /\S+@\S+\.\S+/.test(value);
        },
        message: 'Invalid email address',
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      validate: {
        validator: isPassword,
        message: 'Password must contain at least 5 alphanumeric characters',
      }
    },
    notes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Notes',
    }],
    timestamp: {
      type: Date,
      default: Date.now,
    },
  }
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
const Notes = mongoose.model('Notes', notesSchema);
const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = {
    User, Notes, ToDo
}
