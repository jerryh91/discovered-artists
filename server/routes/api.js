const express = require('express');
const router = express.Router();

const api_artist = 'api-artist';

/* GET api listing. */
//Get list of all artists, with most recently released album or song if album not available
router.get(api_artist + '/artists', (req, res) => {
  res.json([{'artist' : 'blink-182', 'album' : 'california'}, {'artist' : 'tiny moving parts', 'album' : 'swell'}]);
});

module.exports = router;