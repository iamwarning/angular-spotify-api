import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  arrArtist: any[] = [];
  loader: boolean;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchArtist(event: any) {
    console.log(event.target.value);
    this.loader = true;
    this.spotifyService.getArtists(event.target.value).subscribe((artist: any) => {
      console.log(artist);
      this.arrArtist = artist;
      this.loader = false;
    });
  }
}
