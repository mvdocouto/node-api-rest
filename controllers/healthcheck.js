const express = require('express');

const router = express.Router();

router.head('/healthcheck/ping', (req, res) => {
  res.sendStatus(200);
});

router.get('/healthcheck/ping', (req, res) => {
  res.sendStatus(200);
});

module.exports = {
  router,
};