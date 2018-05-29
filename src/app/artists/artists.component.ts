import { Component, OnInit } from '@angular/core';
import { artistAlbumsHashMap } from '../commons/commons';
import { ArtistsService} from './service/artists.service';
import { artistAlbumObject } from '../domain/artist-album-object';
@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {


  artistsListTemp: artistAlbumsHashMap = {};
  artistsListDisplay: Array<Object> = [];
  artistAlbum: artistAlbumObject;

  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
    //Retrieve list of existing artists, maybe with a few artist info: "most recent album/single/ep"
    this.artistsService.getArtistList().subscribe(
      (data) => {
        if (data != null && data['data'] && 
            data['data'].length > 0) {
          this.artistsListDisplay = data['data'];
        }
      }, 
      (error) => {
        console.error(error);
      }
    )
  }
  
  addNewArtistAndAlbum(inputArtist: string, inputAlbum: string) {    
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
    //If successful add: 
    //Return: artist added in response, and most recent album by artist
    let inputArtistAlbum = new artistAlbumObject (inputArtist, inputAlbum);
    this.artistsService.addArtistAndAlbum(inputArtistAlbum).subscribe(
      (data) => {
        if (data != null && data['data'] && data['data'].length > 0) {
         
        }
      }, 
      (error) => {
        console.error(error);
      }
    )

    // this.artistsListDisplay.push({ 'name' : inputArtist, 'album' : inputArtistAlbum});
    
  }

}
