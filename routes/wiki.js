const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');

router.get('/', async (req, res, next) => {
  try {
    res.redirect('../');
  } catch (error) { console.error(error); }
});
router.post('/', async (req, res, next) => {
  res.send('got to POST /wiki');
});
router.get('/add', async (req, res, next) => {
  try {
    res.send(addPage());
  } catch (error) { console.error(error); }
});

module.exports = router;
