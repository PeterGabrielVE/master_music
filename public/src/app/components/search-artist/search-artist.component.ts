import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../../services/spotify.service';
import { Artist } from './../../models/Artist';

import { CapitalizePipe } from './../../pipes/capitalize.pipe';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {

  searchStr = '';
  artists: Artist[];
  findSomething = false;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  searchArtist() {
    this.spotifyService.searchArtist(this.searchStr)
      .subscribe(data => {
        if (data.artists.total > 0) {
          this.findSomething = true;
          this.artists = data.artists.items;
        } else {
          this.findSomething = false;
        }
      });
  }

  ngOnInit() {
  }

}
