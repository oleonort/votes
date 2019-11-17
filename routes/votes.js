const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(`${req.app.get('clientPublicPath')}/votes.html`);
});

module.exports = router;