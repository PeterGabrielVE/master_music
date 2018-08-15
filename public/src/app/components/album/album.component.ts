import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albumId: string;
  album: any;
  isLoading = true;

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

    this.route.params.subscribe(params => {
      this.albumId = params['id'];
    });

    this.spotifyService.getAlbumById(this.albumId)
      .subscribe(data => {
        this.album = data;
      });
  }

}
