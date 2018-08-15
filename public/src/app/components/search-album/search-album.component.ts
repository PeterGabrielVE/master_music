import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../../services/spotify.service';
import { Album } from './../../models/Album';

import { CapitalizePipe } from './../../pipes/capitalize.pipe';

@Component({
  selector: 'app-search-album',
  templateUrl: './search-album.component.html',
  styleUrls: ['./search-album.component.css']
})
export class SearchAlbumComponent implements OnInit {

  searchStr = '';
  albums: Album[];
  findSomething = false;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  searchAlbum() {
    this.spotifyService.searchAlbum(this.searchStr)
      .subscribe(data => {
        if (data.albums.total > 0) {
          this.findSomething = true;
          this.albums = data.albums.items;
        } else {
          this.findSomething = false;
        }
      });
  }



  ngOnInit() {
  }

}
