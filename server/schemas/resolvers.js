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
};