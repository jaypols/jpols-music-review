import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable} from 'rxjs';
import { Review } from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  selectedItem: Review;
  reviews: Review[];
  readonly baseURL = 'http://localhost:8080/api/open/song/reviews'

  constructor(private http : HttpClient) { }

  getReviewList()
  {
    return this.http.get(this.baseURL);
  }

  addReviewRating(rvw: Review)
  {
    return this.http.post('http://localhost:8080/api/secure/add-review-rating/', rvw);
  }

}
