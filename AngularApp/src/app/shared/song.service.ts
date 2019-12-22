import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable} from 'rxjs';
import { Song } from './song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  selectedItem: Song;
  songs: Song[];
  topSongs: Song[];
  matchedSongs: Song[];
  searchString: String;
  readonly baseURL = 'http://localhost:8080/api/open/song/'

  constructor(private http : HttpClient, private router : Router) { }

  getSongList()
  {
    return this.http.get(this.baseURL);
  }

  getSpecificSong()
  {
    var base = this.baseURL
    var url = this.router.url;
    url = base + url.split('/')[3];
    
    return this.http.get(url);
  }

  getSearchString(str :string)
  {
    let params = new HttpParams().set("string", str);

    return this.http.get('http://localhost:8080/api/open/search/', {params: params}); 
  }

  addSong(sng: Song)
  {
    return this.http.post('http://localhost:8080/api/secure/song/', sng);
  }

  changeVisibility(str :string)
  {
    var base = 'http://localhost:8080/api/secure/song/visibility/';
    base = base + str;
    return this.http.get(base);
  }

  setVisibilityTrue(str :string)
  {
    var base = 'http://localhost:8080/api/secure/song/set-visibility-true/';
    base = base + str;
    return this.http.get(base);
  }

  setVisibilityFalse(str :string)
  {
    var base = 'http://localhost:8080/api/secure/song/set-visibility-false/';
    base = base + str;
    return this.http.get(base);
  }

  setCopyrightTrue(str :string)
  {
    var base = 'http://localhost:8080/api/secure/song/set-copyright-true/';
    base = base + str;
    return this.http.get(base);
  }

  setCopyrightFalse(str :string)
  {
    var base = 'http://localhost:8080/api/secure/song/set-copyright-false/';
    base = base + str;
    return this.http.get(base);
  }

}
