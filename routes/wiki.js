const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  res.send('Hello Wiki')
})



module.exports = router;
