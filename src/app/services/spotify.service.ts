import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAaqbqONhhlOml9aO9bGx9iMh7El_DZ3JcRB5jPbrcY3cywCwEPShmw16V_G_vfqnnWxH1m_R1BS-QOKYc'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe(map(data => data[`albums`].items));
  }

  getArtists(artist: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAaqbqONhhlOml9aO9bGx9iMh7El_DZ3JcRB5jPbrcY3cywCwEPShmw16V_G_vfqnnWxH1m_R1BS-QOKYc'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=15`, {headers})
      .pipe(map(data => data[`artists`].items));
  }

  getAnArtist(id: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAaqbqONhhlOml9aO9bGx9iMh7El_DZ3JcRB5jPbrcY3cywCwEPShmw16V_G_vfqnnWxH1m_R1BS-QOKYc'
    });
    return this.http.get(`https://api.spotify.com/v1/artists/${id}`, {headers});
  }

  getTopTracks(id: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAaqbqONhhlOml9aO9bGx9iMh7El_DZ3JcRB5jPbrcY3cywCwEPShmw16V_G_vfqnnWxH1m_R1BS-QOKYc'
    });
    return this.http.get(`	https://api.spotify.com/v1/artists/${id}/top-tracks?country=mx`, {headers})
      .pipe(map(data => data[`tracks`]));
  }
}
