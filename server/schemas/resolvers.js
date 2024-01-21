const { User, Notes, Employee, EmployeeNotes, CorrectiveAction, Positive, ToDo } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const bcrypt = require('bcryptjs');

const resolvers = {
    Query: {
        getUserByID: async (parent, { _id }) => {
            try {
                // Find the user by username and populate collections and decks
                const user = await User.findOne({ _id })
                    .populate({
                        path: 'notes',
                        populate: { path: 'notes' }
                    })
                    .populate({
                        path: 'toDo',
                        populate: { path: 'toDo' }
                    });

                if (!user) {
                    throw new AuthenticationError('No user found with this username');
                }

                return user;
            } catch (error) {
                throw new Error(`Error getting user by username: ${error.message}`);
            }
        }
    },
    getAllUsers: async (parent, { _id }) => {
        try {
            // Find the user by username and populate collections and decks
            const user = await User.findOne({ _id })
                .populate({
                    path: 'notes',
                    populate: { path: 'notes' }
                })
                .populate({
                    path: 'toDo',
                    populate: { path: 'toDo' }
                });

            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }

            return user;
        } catch (error) {
            throw new Error(`Error getting user by username: ${error.message}`);
        }
    },
    getAllNotes: async (parent, { _id }) => {
        try {
            // Find the user by username and populate collections and decks
            const user = await User.findOne({ _id })
                .populate({
                    path: 'notes',
                    populate: { path: 'notes' }
                })
                .populate({
                    path: 'toDo',
                    populate: { path: 'toDo' }
                });

            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }

            return user;
        } catch (error) {
            throw new Error(`Error getting user by username: ${error.message}`);
        }
    },
    getOneNotes: async (parent, { _id }) => {
        try {
            // Find the user by username and populate collections and decks
            const notes = await Notes.findOne({ _id })
                .populate({ path: 'notes' });

            if (!notes) {
                throw new AuthenticationError('No user found with this username');
            }

            return notes;
        } catch (error) {
            throw new Error(`Error getting user by username: ${error.message}`);
        }
    },
    getAllToDo: async (parent, { _id }) => {
        try {
            // Find the user by username and populate collections and decks
            const user = await User.findOne({ _id })
                .populate({
                    path: 'notes',
                    populate: { path: 'notes' }
                })
                .populate({
                    path: 'toDo',
                    populate: { path: 'toDo' }
                });

            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }

            return user;
        } catch (error) {
            throw new Error(`Error getting user by username: ${error.message}`);
        }
    },
    getOneToDo: async (parent, { _id }) => {
        try {
            // Find the user by username and populate collections and decks
            const toDo = await ToDo.findOne({ _id })
                .populate({ path: 'toDo' });

            if (!toDo) {
                throw new AuthenticationError('No user found with this username');
            }

            return toDo;
        } catch (error) {
            throw new Error(`Error getting user by username: ${error.message}`);
        }
    },
    getAllEmployees: async (parent, { _id }) => {
        try {
            // Find the user by username and populate collections and decks
            const user = await User.findOne({ _id })
                .populate({
                    path: 'notes',
                    populate: { path: 'notes' }
                })
                .populate({
                    path: 'toDo',
                    populate: { path: 'toDo' }
                });

            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }

            return user;
        } catch (error) {
            throw new Error(`Error getting user by username: ${error.message}`);
        }
    },
    getOneEmployee: async (parent, { _id }) => {
        try {
            // Find the user by username and populate collections and decks
            const user = await User.findOne({ _id })
                .populate({
                    path: 'notes',
                    populate: { path: 'notes' }
                })
                .populate({
                    path: 'toDo',
                    populate: { path: 'toDo' }
                });

            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }

            return user;
        } catch (error) {
            throw new Error(`Error getting user by username: ${error.message}`);
        }
    },
    getOneEmployeeNotes: async (parent, { _id }) => {
        try {
            // Find the user by username and populate collections and decks
            const user = await User.findOne({ _id })
                .populate({
                    path: 'notes',
                    populate: { path: 'notes' }
                })
                .populate({
                    path: 'toDo',
                    populate: { path: 'toDo' }
                });

            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }

            return user;
        } catch (error) {
            throw new Error(`Error getting user by username: ${error.message}`);
        }
    },
    getOnePositive: async (parent, { _id }) => {
        try {
            // Find the user by username and populate collections and decks
            const user = await User.findOne({ _id })
                .populate({
                    path: 'notes',
                    populate: { path: 'notes' }
                })
                .populate({
                    path: 'toDo',
                    populate: { path: 'toDo' }
                });

            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }

            return user;
        } catch (error) {
            throw new Error(`Error getting user by username: ${error.message}`);
        }
    },
    getOneCorrectiveAction: async (parent, { _id }) => {
        try {
            // Find the user by username and populate collections and decks
            const user = await User.findOne({ _id })
                .populate({
                    path: 'notes',
                    populate: { path: 'notes' }
                })
                .populate({
                    path: 'toDo',
                    populate: { path: 'toDo' }
                });

            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }

            return user;
        } catch (error) {
            throw new Error(`Error getting user by username: ${error.message}`);
        }
    },
    getAllEmployeeNotes: async (parent, { _id }) => {
        try {
            // Find the user by username and populate collections and decks
            const user = await User.findOne({ _id })
                .populate({
                    path: 'notes',
                    populate: { path: 'notes' }
                })
                .populate({
                    path: 'toDo',
                    populate: { path: 'toDo' }
                });
            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }
            return user;
        } catch (error) {
            throw new Error(`Error getting user by username: ${error.message}`);
        }
    },
    getAllEmployeePositive: async (parent, { _id }) => {
        try {
            // Find the user by username and populate collections and decks
            const user = await User.findOne({ _id })
                .populate({
                    path: 'notes',
                    populate: { path: 'notes' }
                })
                .populate({
                    path: 'toDo',
                    populate: { path: 'toDo' }
                });
            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }
            return user;
        } catch (error) {
            throw new Error(`Error getting user by username: ${error.message}`);
        }
    },
    getAllEmployeeToDo: async (parent, { _id }) => {
        try {
            // Find the user by username and populate collections and decks
            const user = await User.findOne({ _id })
                .populate({
                    path: 'notes',
                    populate: { path: 'notes' }
                })
                .populate({
                    path: 'toDo',
                    populate: { path: 'toDo' }
                });
            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }
            return user;
        } catch (error) {
            throw new Error(`Error getting user by username: ${error.message}`);
        }
    },
    getAllEmployeeCorrectiveAction: async (parent, { _id }) => {
        try {
            // Find the user by username and populate collections and decks
            const user = await User.findOne({ _id })
                .populate({
                    path: 'notes',
                    populate: { path: 'notes' }
                })
                .populate({
                    path: 'toDo',
                    populate: { path: 'toDo' }
                });
            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }
            return user;
        } catch (error) {
            throw new Error(`Error getting user by username: ${error.message}`);
        }
    },
    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            try {
                const user = await User.create({ username, email, password });
                const token = signToken(user);
                return { token, user };
            } catch (error) {
                throw new Error(`Error creating user: ${error.message}`);
            }
        },
        addNotes: async (parent, { notes_name, notes_description }) => {
            try {
                const notes = await Notes.create({ notes_name, notes_description });
                return notes;
            } catch (error) {
                throw new Error(`Error creating notes: ${error.message}`);
            }
        },
        addEmployee: async (parent, { first_name, last_name, email, phone, birthday, hire_date }) => {
            try {
                const employee = await Employee.create({ first_name, last_name, email, phone, birthday, hire_date });
                return employee;
            } catch (error) {
                throw new Error(`Error creating employee: ${error.message}`);
            }
        },
        addEmployeeNotes: async (parent, { employeeNotes_name, employeeNotes_description }) => {
            try {
                const employeeNotes = await EmployeeNotes.create({ employeeNotes_name, employeeNotes_description });
                return employeeNotes;
            } catch (error) {
                throw new Error(`Error creating employeeNotes: ${error.message}`);
            }
        },
        addPositive: async (parent, { positive_name, positive_pictures, positive_description }) => {
            try {
                const positive = await Positive.create({ positive_name, positive_pictures, positive_description });
                return positive;
            } catch (error) {
                throw new Error(`Error creating positive: ${error.message}`);
            }
        },
        addCorrectiveAction: async (parent, { correctiveAction_name, correctiveAction_pictures, correctiveAction_description }) => {
            try {
                const correctiveAction = await CorrectiveAction.create({ correctiveAction_name, correctiveAction_pictures, correctiveAction_description });
                return correctiveAction;
            } catch (error) {
                throw new Error(`Error creating correctiveAction: ${error.message}`);
            }
        },
        addToDo: async (parent, { toDos_name, toDos_description }) => {
            try {
                const toDo = await ToDo.create({ toDos_name, toDos_description });
                return toDo;
            } catch (error) {
                throw new Error(`Error creating toDo: ${error.message}`);
            }
        },
        deleteNotes: async (parent, { _id }) => {
            try {
                const notes = await Notes.findOneAndDelete({ _id });
                return notes;
            } catch (error) {
                throw new Error(`Error deleting notes: ${error.message}`);
            }
        },
        deleteEmployee: async (parent, { _id }) => {
            try {
                const employee = await Employee.findOneAndDelete({ _id });
                return employee;
            } catch (error) {
                throw new Error(`Error deleting employee: ${error.message}`);
            }
        },
        deleteEmployeeNotes: async (parent, { _id }) => {
            try {
                const employeeNotes = await EmployeeNotes.findOneAndDelete({ _id });
                return employeeNotes;
            } catch (error) {
                throw new Error(`Error deleting employeeNotes: ${error.message}`);
            }
        },
        deletePositive: async (parent, { _id }) => {
            try {
                const positive = await Positive.findOneAndDelete({ _id });
                return positive;
            } catch (error) {
                throw new Error(`Error deleting positive: ${error.message}`);
            }
        },
        deleteCorrectiveAction: async (parent, { _id }) => {
            try {
                const correctiveAction = await CorrectiveAction.findOneAndDelete({ _id });
                return correctiveAction;
            } catch (error) {
                throw new Error(`Error deleting correctiveAction: ${error.message}`);
            }
        },
        deleteToDo: async (parent, { _id }) => {
            try {
                const toDo = await ToDo.findOneAndDelete({ _id });
                return toDo;
            } catch (error) {
                throw new Error(`Error deleting toDo: ${error.message}`);
            }
        },
        updateNotes: async (parent, { _id, notes_name, notes_description }) => {
            try {
                const notes = await Notes.findOneAndUpdate(
                    { _id },
                    { notes_name, notes_description },
                    { new: true }
                );
                return notes;
            } catch (error) {
                throw new Error(`Error updating notes: ${error.message}`);
            }
        },
        updateEmployee: async (parent, { _id, first_name, last_name, email, phone, birthday, hire_date }) => {
            try {
                const employee = await Employee.findOneAndUpdate(
                    { _id },
                    { first_name, last_name, email, phone, birthday, hire_date },
                    { new: true }
                );
                return employee;
            } catch (error) {
                throw new Error(`Error updating employee: ${error.message}`);
            }
        },
        updateEmployeeNotes: async (parent, { _id, employeeNotes_name, employeeNotes_description }) => {
            try {
                const employeeNotes = await EmployeeNotes.findOneAndUpdate(
                    { _id },
                    { employeeNotes_name, employeeNotes_description },
                    { new: true }
                );
                return employeeNotes;
            } catch (error) {
                throw new Error(`Error updating employeeNotes: ${error.message}`);
            }
        },
        updatePositive: async (parent, { _id, positive_name, positive_pictures, positive_description }) => {
            try {
                const positive = await Positive.findOneAndUpdate(
                    { _id },
                    { positive_name, positive_pictures, positive_description },
                    { new: true }
                );
                return positive;
            } catch (error) {
                throw new Error(`Error updating positive: ${error.message}`);
            }
        },
        updateCorrectiveAction: async (parent, { _id, correctiveAction_name, correctiveAction_pictures, correctiveAction_description }) => {
            try {
                const correctiveAction = await CorrectiveAction.findOneAndUpdate(
                    { _id },
                    { correctiveAction_name, correctiveAction_pictures, correctiveAction_description },
                    { new: true }
                );
                return correctiveAction;
            } catch (error) {
                throw new Error(`Error updating correctiveAction: ${error.message}`);
            }
        },
        updateToDo: async (parent, { _id, toDos_name, toDos_description }) => {
            try {
                const toDo = await ToDo.findOneAndUpdate(
                    { _id },
                    { toDos_name, toDos_description },
                    { new: true }
                );
                return toDo;
            } catch (error) {
                throw new Error(`Error updating toDo: ${error.message}`);
            }
        },
        login: async (parent, { username, password }) => {
            try {
                // Find the user by username
                const user = await User.findOne({ username });

                // If the user is not found, throw AuthenticationError
                if (!user) {
                    throw new AuthenticationError('No user found with this username');
                }
                if (!password) {
                    throw new AuthenticationError('You need to enter a password');
                }
                if (password === user.password) {
                    // Password is correct
                    // Generate and return a JWT token
                    const token = signToken(user);
                    return { token };
                }
                // Check bcrypt-hashed password
                if (bcrypt.compareSync(password, user.password)) {
                    // Password is correct
                    // Generate and return a JWT token
                    const token = signToken(user);
                    return { token };
                } else {
                    // Incorrect password
                    throw new AuthenticationError('Incorrect password');
                }
            } catch (error) {
                throw new Error(`Error during login: ${error.message}`);
            }
        }


    };