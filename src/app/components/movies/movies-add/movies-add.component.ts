import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from '../movies.service';
import {Router} from '@angular/router';
import {Movie} from '../../../model/movie.model';
import {NgForm} from '@angular/forms';
import {InterceptorComponent} from '../../../interceptor/interceptor.component';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent extends InterceptorComponent implements OnInit, OnDestroy {

  movies: Movie[] = [];
  movieId: number;
  isPrivate = false;
  private subscription: Subscription;

  constructor(private router: Router, private service: MoviesService) {
    super();
  }

  ngOnInit(): void {
  }

  lookupMovie(title: string): void {
    this.subscription = this.service.lookupMovie(title, true).subscribe((response: Movie[]) => {
      this.movies = response;
    });
  }

  addMovie(onlineId: number): void{
    console.log(!this.isPrivate);
    this.service.addMovie(onlineId, !this.isPrivate).subscribe((response: Movie) => {
      this.movieId = response.id;
      if (this.movieId != null) {
        this.router.navigate(['movies/' + this.movieId]);
      }
    });
  }


  ngOnDestroy(): void {
    // don't forget to unsubscribe!
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
