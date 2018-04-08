import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as url_constants from '../../commons/url-constants';

@Injectable()
export class ArtistsService {

  constructor(private http: HttpClient) { }

  getArtistsList() {
    return this.http.get('apis/' + url_constants.apiUrlRoutes.artist + '/v1' + url_constants.artistsUrlRoutes.artistsList)
  }
}
