const express = require('express');
const router = express.Router();
const { Page, User } = require('../models');
const userPages = require('../views/userPages');
const userList = require('../views/userList');

router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll();
        console.log(users);
        res.send(userList(users));
    } catch (error) {
        console.log(error);
    }
});

router.get('/:userId', async (req, res, next) => {
    console.log(req.params.userId);
    try {
        const user = await User.find({
            where: {
                id: req.params.userId
            }
        });
        console.log('username: ', user.name);
        const pages = await Page.findAll({
            where: {
                authorId: user.id
            } 
        });
        res.send(userPages(user, pages));
    } catch (error) {console.log(error.message)}
});

module.exports = router;
