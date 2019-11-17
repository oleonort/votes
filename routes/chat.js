const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(`${req.app.get('clientPublicPath')}/chat.html`);
});

module.exports = router;