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
//Return latest submitted album/single.
router.post('/' + api_artist + '/' + version_1 + '/artists', (req, res) => {
  console.log("req", req.body);
  if (req.body && req.body['artist'] && req.body['album'] &&
     req.body['artist'].trim().length > 0  && req.body['album'].trim().length > 0) {

    current_artist_list.push ({'artist' : req.body['artist'], 'album' : req.body['album']});
  }
  res.json({
            'data' : current_artist_list
           });
});

app.use(router);

module.exports = router;
