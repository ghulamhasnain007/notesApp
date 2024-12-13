const express = require('express');
const { createUser, getUsers, getOneUser, updateUser, deleteUser } = require('../controllers/users.controller');

const router = express.Router();

router.post('/register', createUser);
router.get('/users', getUsers)
router.get('/user/:id', getOneUser)
router.patch('/user/:id/update', updateUser)
router.delete('/user/:id/delete', deleteUser)

module.exports = {
    router
}