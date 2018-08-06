const express = require('express');
const { User } = require('../models');
const userPages = require('../views/userPages');
const userList = require('../views/userList');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.send(userList(users));
    } catch (error) {
        next(error);
    }
});

// router.get('/:id', (req, res, next) => {

// });

module.exports = router;
