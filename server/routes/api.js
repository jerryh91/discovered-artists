const express = require('express');
const router = express.Router();
const app = express();

const api_artist = 'api-artist';
const version_1 = 'v1';

const current_artist_list =  [{'name' : 'blink-182', 'album' : ['california']}, {'name' : 'tiny moving parts', 'album' : ['swell']}];

/* GET api listing. */
//Get list of all artists, with most recently released album or song if album not available
router.get('/' + api_artist + '/' + version_1 + '/artists', (req, res) => {
  res.json({
            'data' : current_artist_list
           });
});

//Reconcile with current artist list
//Return most recent album for the artist submitted.
router.post('/' + api_artist + '/' + version_1 + '/artists', (req, res) => {
  console.log("req");
  res.json({
            'data' : [{'name' : 'blink-182', 'album' : ['california']}, {'name' : 'tiny moving parts', 'album' : ['swell']}]
           });
});

app.use(router);

module.exports = router;
