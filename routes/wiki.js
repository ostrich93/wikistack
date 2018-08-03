const express = require('express');
const router = express.Router();
const { Page } = require('../models');
const addPage = require('../views/addPage');

// router.use(express.json());

router.get('/', async (req, res, next) => {
  try {
    res.redirect('../');
  } catch (error) {
    console.error(error);
  }
});
router.post('/', async (req, res, next) => {
  // res.send('got to POST /wiki');
  res.json(req.body);
});
router.get('/add', async (req, res, next) => {
  try {
    res.send(addPage());
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
