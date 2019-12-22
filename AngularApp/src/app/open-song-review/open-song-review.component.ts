import { Component, OnInit } from '@angular/core';

import { SongService } from '../shared/song.service';
import { Song } from '../shared/song.model';

import { ReviewService } from '../shared/review.service';
import { Review } from '../shared/review.model';

@Component({
  selector: 'app-open-song-review',
  templateUrl: './open-song-review.component.html',
  styleUrls: ['./open-song-review.component.css'],
  providers: [SongService, ReviewService]
})
export class OpenSongReviewComponent implements OnInit {

  constructor(private songService: SongService, private reviewService: ReviewService) { }

  ngOnInit() {
    
    this.getSongDetails();
    this.getReviews();
  }

  getSongDetails()
  {
    this.songService.getSpecificSong().subscribe((res :any) => {
      this.songService.selectedItem = res;
    });
    this.getReviews();
  }

  getReviews()
  {
    this.reviewService.getReviewList().subscribe((res :any) => {

      var x = [];

      this.reviewService.reviews = res as Review[];

      this.getSongDetails();

      for(var i = 0; i < this.reviewService.reviews.length; i++)
      {
        if(this.songService.selectedItem.objectID == this.reviewService.reviews[i].objectID)
        {
          x.push(this.reviewService.reviews[i]);
        }
      }


      x.sort(function(a:any, b:any){ 
      
        return +new Date(a.date) - +new Date(b.date); 
      }); 

      x = x.reverse();

      this.reviewService.reviews = x;

    });


  }

  viewMore()
  {
    //console.log(document.getElementById("ViewMoreReviewsButton").innerText)
    if(document.getElementById("ViewMoreReviewsButton").innerText == "VIEW MORE REVIEWS")
    {
      document.getElementById("ViewMoreReviewsButton").innerText = 'VIEW LESS REVIEWS';
      document.getElementById("all-others").style.display = "block";
    }
    else
    {
      document.getElementById("ViewMoreReviewsButton").innerText = 'VIEW MORE REVIEWS';
      document.getElementById("all-others").style.display = "none";
    }
  }


}
