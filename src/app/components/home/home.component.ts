import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrNewReleases: any[] = [];
  loader = false;

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
    this.spotifyService.getNewReleases().subscribe((release: any) => {
      this.arrNewReleases = release;
      this.loader = true;
    }, (err => {
      console.log(err);
    }));
  }

}
