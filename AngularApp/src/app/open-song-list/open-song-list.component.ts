import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SongService } from '../shared/song.service';
import { Song } from '../shared/song.model';

@Component({
  selector: 'app-open-song-list',
  templateUrl: './open-song-list.component.html',
  styleUrls: ['./open-song-list.component.css'],
  providers: [SongService]
})
export class OpenSongListComponent implements OnInit {

  constructor(private songService: SongService) { }

  ngOnInit() {
  this.getSongs();
  }

  getSongs()
  {
    this.songService.getSongList().subscribe((res) => {
      this.songService.songs = res as Song[];
      this.songService.topSongs = this.songService.songs;

      this.songService.topSongs.sort(function(a, b) {
        return (b.avgRating) - (a.avgRating);
      });

      var x = [];
      for(var i = 0; i < this.songService.topSongs.length; i++)
      {
        if(this.songService.topSongs[i].visibility == true)
        {
          x.push(this.songService.topSongs[i]);
        }
      }

      this.songService.topSongs = x;

    });
  }

  submitSearch(event, formData)
  {
    //console.log(event);
    if(formData.value.q == null)
    {
      console.log(" ")
    }
    else
    {
      this.songService.getSearchString(formData.value.q).subscribe((res) => {
        this.songService.matchedSongs = res as Song[];

        var x = [];

        for(var i = 0; i < this.songService.matchedSongs.length; i++)
        {
          if(this.songService.matchedSongs[i].visibility == true)
          {
            x.push(this.songService.matchedSongs[i]);
          }
        }

        this.songService.matchedSongs = x;

        console.log(res);
      });
    }
    //console.log(formData.value.q);
  }

}
