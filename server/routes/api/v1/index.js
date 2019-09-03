const createError = require('http-errors');
const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

fs.readdirSync(__dirname).forEach((filename) => {
  if (path.extname(filename) === '.js' && filename !== 'index.js') {
    const jsname = path.basename(filename, '.js');
    router.use(`/${jsname}`, require(`./${jsname}`));
  }
});

router.use(function (req, res, next) {
  next(createError(404));
});

module.exports = router;