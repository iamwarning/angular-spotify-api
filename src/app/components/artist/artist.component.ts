import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  infoArtist: any = {};
  loader: boolean;
  arrTopTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params[`id`]);
      this.showArtistInfo(params[`id`]);
      this.showTopTracks(params[`id`]);
    });
  }

  showArtistInfo(id: string) {
    this.loader = true;
    this.spotifyService.getAnArtist(id).subscribe(data => {
      console.log(data);
      this.infoArtist = data;
      this.loader = false;
    });
  }

  showTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe(tops => {
      console.log(tops);
      this.arrTopTracks = tops;
    });
  }

}
