import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from './../../services/spotify.service';

import { CapitalizePipe } from './../../pipes/capitalize.pipe';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artistId: string;
  artist: any;
  albums: any;
  isLoading = true;
  portadas: any;

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

    this.route.params.subscribe(params => {
      this.artistId = params['id'];
    });

    this.spotifyService.getArtistById(this.artistId)
      .subscribe(data => {
        this.artist = data;
      });

    this.spotifyService.getAlbumsByArtist(this.artistId)
      .subscribe(data => {
        this.albums = data.items;
      });
  }

}
