import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as url_constants from '../../commons/url-constants';
import { artistAlbumObject } from '../../domain/artist-album-object';

@Injectable()
export class ArtistsService {

  constructor(private http: HttpClient) { }

  getArtistList() {
    return this.http.get('/' + url_constants.apiUrlRoutes.artist + '/v1' + url_constants.artistsUrlRoutes.artistsList)
  }

  addArtistAndAlbum(artistAlbum: artistAlbumObject) {
    return this.http.post<artistAlbumObject>('/' + url_constants.apiUrlRoutes.artist + '/v1' + url_constants.artistsUrlRoutes.artistsList, artistAlbum)
  }
}
