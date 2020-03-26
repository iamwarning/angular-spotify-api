import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() items: any[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  showArtistInfo(value: any) {
    let artistId;
    if (value.type === 'artist') {
      artistId = value.id;
    } else {
      artistId = value[`artists`][0].id;
    }
    this.router.navigate(['/artist', artistId]).then(() => {});

    console.log(artistId);
  }
}
