import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  token = localStorage.getItem('access_token');
  headers;

  searchUrl = 'https://api.spotify.com/v1/search';
  artistByIdUrl = 'https://api.spotify.com/v1/artists/';
  albumByIdUrl = 'https://api.spotify.com/v1/albums/';
  query = '?q=';
  market = '&market=ES';
  limit = '&limit=20';
  offset = '&offset=0';

  artistType = '&type=artist';
  albumType = '&type=album';

  searchArtistUrl;
  searchAlbumUrl;
  getAlbumsByArtistUrl;
  getAlbumByIdUrl;

  getArtistByIdUrl;

  constructor(
    private http: Http
  ) { }

  setAuthenticationHeader() {
    this.headers = new Headers();
    this.headers.append('Authorization', 'Bearer ' + this.token);
  }

  // "https://api.spotify.com/v1/search?q=iron+maiden&type=artist&market=ES&limit=20&offset=0"
  searchArtist(str) {
    this.setAuthenticationHeader();
    this.searchArtistUrl = this.searchUrl + this.query + str + this.artistType + this.market + this.limit + this.offset;

    const requestOptions = new RequestOptions({
      method: RequestMethod.Get,
      url: this.searchArtistUrl,
      headers: this.headers
    });

    return this.http.request(new Request(requestOptions))
      .map(res => res.json());
  }

  // "https://api.spotify.com/v1/search?query=the+book+of+souls&type=album&market=ES&offset=0&limit=10"
  searchAlbum(str) {
    this.setAuthenticationHeader();
    this.searchAlbumUrl = this.searchUrl + this.query + str + this.albumType + this.market + this.limit + this.offset;

    const requestOptions = new RequestOptions({
      method: RequestMethod.Get,
      url: this.searchAlbumUrl,
      headers: this.headers
    });

    return this.http.request(new Request(requestOptions))
      .map(res => res.json());
  }

  // "https://api.spotify.com/v1/artists/6mdiAmATAx73kdxrNrnlao"
  getArtistById(artistId) {
    this.setAuthenticationHeader();
    this.getArtistByIdUrl = this.artistByIdUrl + artistId;

    const requestOptions = new RequestOptions({
      method: RequestMethod.Get,
      url: this.getArtistByIdUrl,
      headers: this.headers
    });

    return this.http.request(new Request(requestOptions))
      .map(res => res.json());
  }

  // "https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/albums?market=ES&limit=50&offset=0"
  getAlbumsByArtist(artistId) {
    this.setAuthenticationHeader();
    this.getAlbumsByArtistUrl = this.artistByIdUrl + artistId + '/albums?market=ES&limit=50' + this.offset;

    const requestOptions = new RequestOptions({
      method: RequestMethod.Get,
      url: this.getAlbumsByArtistUrl,
      headers: this.headers
    });

    return this.http.request(new Request(requestOptions))
      .map(res => res.json());
  }

  // "https://api.spotify.com/v1/albums/4vSfHrq6XxVyMcJ6PguFR2?market=ES"
  getAlbumById(albumId) {
    this.setAuthenticationHeader();
    this.getAlbumByIdUrl = this.albumByIdUrl + albumId + '?market=ES';

    const requestOptions = new RequestOptions({
      method: RequestMethod.Get,
      url: this.getAlbumByIdUrl,
      headers: this.headers
    });

    return this.http.request(new Request(requestOptions))
      .map(res => res.json());
  }

}
