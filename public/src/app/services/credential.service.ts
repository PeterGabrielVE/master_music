import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CredentialService {

  constructor(
    private http: Http
  ) { }

  getAccessToken() {
    return this.http.get('/credentials')
      .map(res => res.json());
  }

}
