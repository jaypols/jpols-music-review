import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SongService } from '../shared/song.service';
import { Song } from '../shared/song.model';

import { ReviewService } from '../shared/review.service';
import { Review } from '../shared/review.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-secure-song-list',
  templateUrl: './secure-song-list.component.html',
  styleUrls: ['./secure-song-list.component.css'],
  providers: [SongService]
})
export class SecureSongListComponent implements OnInit {

  constructor(private songService: SongService, private _router: Router, private reviewService: ReviewService) { }

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
  }

  logout()
  {
    localStorage.removeItem('token');
    this._router.navigate(['/api/open']);
  }

  onSubmitSong(form: NgForm)
  {
    this.getSongs();
    if((form.value.songTitle == "" || form.value.songTitle == null || form.value.songTitle == undefined) &&(form.value.artist == "" || form.value.artist == null || form.value.artist == undefined))
    {
      document.getElementById('title-missing').style.display = "block";
      document.getElementById('artist-missing').style.display = "block";
    }
    else if(form.value.songTitle == "" || form.value.songTitle == null || form.value.songTitle == undefined)
    {
      document.getElementById('artist-missing').style.display = "none";
      document.getElementById('title-missing').style.display = "block";
    }
    else if(form.value.artist == "" || form.value.artist == null || form.value.artist == undefined)
    {
      document.getElementById('title-missing').style.display = "none";
      document.getElementById('artist-missing').style.display = "block";
    }
    else if((form.value.submittedBy == "" || form.value.submittedBy == null || form.value.submittedBy == undefined) && (form.value.ratingForObject == "" || form.value.ratingForObject == null || form.value.ratingForObject == undefined) && (form.value.description == "" || form.value.description == null || form.value.description == undefined))
    {
      form.value.objectID = this.songService.songs.length + 1;
      console.log(form.value);
      this.songService.addSong(form.value).subscribe((res) => 
      {
        console.log(res);
        form.reset();
        document.getElementById('title-missing').style.display = "none";
        document.getElementById('artist-missing').style.display = "none";
      });
    }
    else if(form.value.submittedBy != "" || form.value.ratingForObject != "" || form.value.description != "")
    {
      if(form.value.submittedBy == null || form.value.submittedBy == "" || form.value.submittedBy == undefined)
      {
        document.getElementById('username-missing').style.display = "block";
      }
      else if (form.value.ratingForObject < 0 || form.value.ratingForObject > 5)
      {
        document.getElementById('username-missing').style.display = "none";
        document.getElementById('rating-wrong').style.display = "block";
      }
      else
      {
        form.value.objectID = this.songService.songs.length + 1;
        console.log(form.value);
        this.songService.addSong(form.value).subscribe((res) => 
        {
          console.log(res);
          form.reset();
          document.getElementById('title-missing').style.display = "none";
          document.getElementById('artist-missing').style.display = "none";
        });
        this.reviewService.addReviewRating(form.value).subscribe((res) => 
        {
          form.reset();
          document.getElementById('rating-wrong').style.display = "none";
          document.getElementById('username-missing').style.display = "none";
        });
      }
    }
    this.getSongs();

  }

}
