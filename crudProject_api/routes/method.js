const express = require('express');

const {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/crud');

const router = express.Router();

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)