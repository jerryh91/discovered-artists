import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as url_constants from '../../commons/url-constants';
import { artistAlbumObject } from '../../domain/artist-album-object';
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class ArtistsService {

  constructor(private http: HttpClient) { }

  getArtistList(queryParams: Object []) {
    let queryParamsString = '';

    if (queryParams && 
        queryParams.length > 0) {
          queryParamsString += "?";
          let index;
          for (index = 0; index < queryParams.length - 1; index++) {
            queryParamsString += queryParams[index]["key"] + "=" + queryParams[index]["value"] + "&";
            
          }
          queryParamsString += queryParams[index]["key"] + "=" + queryParams[index]["value"];
       
    }
    return this.http.get('/' + url_constants.apiUrlRoutes.artist + '/v1' + url_constants.artistsUrlRoutes.artistsList + queryParamsString);
  }

  addArtistAndAlbum(artistAlbum: artistAlbumObject) {
    return this.http.post<artistAlbumObject>('/' + url_constants.apiUrlRoutes.artist + '/v1' + url_constants.artistsUrlRoutes.artistsList, artistAlbum)
  }
}
