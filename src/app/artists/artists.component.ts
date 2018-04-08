import { Component, OnInit } from '@angular/core';
import { artistAlbumsHashMap } from '../commons/commons';
import { ArtistsService} from './service/artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {


  artistsListTemp: artistAlbumsHashMap = {};
  artistsListDisplay: Array<Object> = [];
  artist: Object;

  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
    //Retrieve list of existing artists, maybe with a few artist info.
    this.artistsService.getArtistsList().subscribe(
      (data) => {
        if (data != null && data['data'] && data['data'].length > 0) {
          this.artistsListDisplay = data['data'];
        }
      }, 
      (error) => {
        console.error(error);
      }
    )
  }
  
  addNewArtistAndAlbum(inputArtist: string, inputArtistAlbum?: string) {
    if (this.artistsListTemp[inputArtist] == null) {
      this.artistsListTemp[inputArtist] = new Set();
    }
    this.artistsListTemp[inputArtist].add(inputArtistAlbum);
    
    /*TEST
    //iterate display map, for each artist found, add to albums value if not already present
    for (let artistItem of this.artistsListDisplay) {
      let perArtistItem = artistItem;
      if (perArtistItem['artist'] == inputArtist) {
        for (let artistItemAlbum of perArtistItem['albums']) {
          
        }
      }
    }
    */

    //Make post call to add new artist item.
    
    //Make get call to retrieve all artists from backend and set to map variable
    
    this.artistsListDisplay.push({ 'artist' : inputArtist, 'albums' : inputArtistAlbum});

  }

}
