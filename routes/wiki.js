const express = require('express');
const router = express.Router();
const { Page } = require('../models');
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
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
  });

  try {
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
    res.send(wikiPage(page));
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
