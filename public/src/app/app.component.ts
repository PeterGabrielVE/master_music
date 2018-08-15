import { CredentialService } from './services/credential.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private credentialService: CredentialService
  ) { }

  ngOnInit() {
    this.credentialService.getAccessToken()
      .subscribe(data => {
        localStorage.setItem('access_token', data.access_token);
      });
  }

  ngOnDestroy() {
    localStorage.clear();
  }

}
