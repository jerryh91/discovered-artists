import { Component, OnInit } from '@angular/core';
import { ArtistsService} from './service/artists.service';
import { artistAlbumObject } from '../domain/artist-album-object';
@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artistsListDisplay: Array<Object> = [];
  artistAlbum: artistAlbumObject;

  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
    //Retrieve list of existing artists, maybe with a few artist info: "most recent album/single/ep"
    this.artistsService.getArtistList([{"key" : "sort", "value" : "desc"}, {"key": "type", "value": "album"}]).subscribe(
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
    //Make post call to add new artist item.
    //If successful add: 
    //Return: artist added in response, and most recent album by artist
    let inputArtistAlbum = new artistAlbumObject (inputArtist, inputAlbum);
    this.artistsService.addArtistAndAlbum(inputArtistAlbum).subscribe(
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

}
