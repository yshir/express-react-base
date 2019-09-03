const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.json({
    page: 'users',
    list: [
      { id: 1, name: 'tanaka', age: 24 },
      { id: 2, name: 'sato', age: 32 },
      { id: 3, name: 'suzuki', age: 18 },
    ],
  })
});

module.exports = router;
