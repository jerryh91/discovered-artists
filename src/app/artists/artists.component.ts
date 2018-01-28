import { Component, OnInit } from '@angular/core';
import { artistAlbumsHashMap } from '../commons/commons';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {


  artistsList: artistAlbumsHashMap = {};
  artist: Object;

  constructor() { }

  ngOnInit() {
  }
  
  addNewArtistAndAlbum(inputArtist: string, inputArtistAlbum?: string) {
    if (this.artistsList[inputArtist] == null) {
      this.artistsList[inputArtist] = new Set();
    }
    this.artistsList[inputArtist].add(inputArtistAlbum);
  }

}
