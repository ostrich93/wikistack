const express = require('express');
const router = express.Router();
const { Page, User } = require('../models');
const addPage = require('../views/addPage');
const wikiPage = require('../views/wikipage');

// router.use(express.json());

router.get('/', async (req, res, next) => {
  try {
    res.redirect('../');
  } catch (error) {
    console.error(error);
  }
});
router.post('/', async (req, res, next) => {
  try {
    const [user, wasCreated] = await User.findOrCreate({
      where: {
        name: req.body.name,
        email: req.body.email
      }
    });
    const page = await Page.create(req.body);
    page.setAuthor(user);
    await page.save();
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error);
  }
});
router.get('/add', async (req, res, next) => {
  try {
    res.send(addPage());
  } catch (error) {
    console.error(error);
  }
});

router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: { slug: `${req.params.slug}` },
    });
    const author = await page.getAuthor();
    res.send(wikiPage(page, author));
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
