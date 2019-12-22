import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SongService } from '../shared/song.service';
import { Song } from '../shared/song.model';

import { ReviewService } from '../shared/review.service';
import { Review } from '../shared/review.model';

import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-secure-song-review',
  templateUrl: './secure-song-review.component.html',
  styleUrls: ['./secure-song-review.component.css'],
  providers: [SongService, ReviewService]
})
export class SecureSongReviewComponent implements OnInit {

  constructor(private songService: SongService, private reviewService: ReviewService, private _router: Router, private userService: UserService) { }

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

  logout()
  {
    localStorage.removeItem('token');
    this._router.navigate(['/api/open']);
  }

  onSubmitReview(form: NgForm)
  {
    form.value.objectID = this.songService.selectedItem.objectID;
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
      this.reviewService.addReviewRating(form.value).subscribe((res) => 
      {
        form.reset();
        document.getElementById('rating-wrong').style.display = "none";
        document.getElementById('username-missing').style.display = "none";
        this.getReviews();
      });
    }
  }

}
