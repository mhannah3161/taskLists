const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const isPassword = (value) => {
  return /^[a-zA-Z0-9]+$/.test(value) && value.length >= 5;
};

const employeeSchema = new mongoose.Schema({
  first_name: String,
    last_name: String,
    email: String,
    phone: String,
    employee_notes: [employeeNotesSechema],
    collections: [collectionSchema],
});

const notesSchema = new mongoose.Schema({
  notes_name: String,
  notes_description: String,
});

const employeeNotesSechema = new mongoose.Schema({
    employeeNotes_name: String,
    employeeNotes_description: String,
    });

const correctiveActionSchema = new mongoose.Schema({
    correctiveAction_name: String,
    correctiveAction_pictures: String,
    correctiveAction_description: String,
    });

const positiveSchema = new mongoose.Schema({
    positive_name: String,
    positive_pictures: String,
    positive_description: String,
    });

const collectionSchema = new mongoose.Schema({
  collection_id: mongoose.Schema.Types.ObjectId,
  collection_name: String,
  collection_correctiveActions: [correctiveActionSchema],
  collection_positives: [positiveSchema],
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
    decks: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Deck',
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

module.exports = User;
