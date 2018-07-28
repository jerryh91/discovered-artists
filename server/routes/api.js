const express = require('express');
const router = express.Router();
const app = express();

const api_artist = 'api-artist';
const version_1 = 'v1';

const current_artist_list =  [{'artist' : 'blink-182', 'album' : ['california']}, {'artist' : 'tiny moving parts', 'album' : ['swell']}];

/* GET api listing. */
//Get list of all artists, with most recently released album or song if album not available
router.get('/' + api_artist + '/' + version_1 + '/artists', (req, res) => {
  if (req.query) {
    console.log(req.query);
  }

  res.json({
            'data' : current_artist_list
           });
});

//Reconcile with current artist list
//Return latest submitted album/single.
router.post('/' + api_artist + '/' + version_1 + '/artists', (req, res) => {
  if (req.body) {
    let newArtist = req.body['artist'];
    let newAlbum = req.body['album'];
    
    if (req.body['artist'] && req.body['album'] &&
        req.body['artist'].trim().length > 0  && req.body['album'].trim().length > 0) {
      
      //Check if artist's album already added
      let duplicateArtistAlbum = false;
      let duplicateArtist = false;
      let duplicateArtistIndex = 0;
      
      outerloop:
      for (let index = 0; index < current_artist_list.length; index++) {
        const element = current_artist_list[index];
        if (element['artist'] === newArtist) {
          duplicateArtist = true;
          duplicateArtistIndex = index;

          for (let jndex = 0; jndex < element['album'].length; jndex++) {
            if (element['album'][jndex] === newAlbum) {
              duplicateArtistAlbum = true;
              break outerloop;
            }
          }
        }
      }
      if (duplicateArtist === false) {
        current_artist_list.push ({'artist' : newArtist, 'album' : [newAlbum]});
      } else {
        if (duplicateArtistAlbum === false) {
          //Search for existing artist, then add to the album list.
          current_artist_list[duplicateArtistIndex]['album'].push(newAlbum);
        }
      }      
     
      res.json({
        'data' : current_artist_list
      });
    }
  }
  
});

app.use(router);

module.exports = router;
