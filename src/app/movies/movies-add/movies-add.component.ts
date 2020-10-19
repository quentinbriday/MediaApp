import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Router} from '@angular/router';
import {Movie} from '../../movie.model';
import {NgForm} from '@angular/forms';
import {InterceptorComponent} from '../../interceptor/interceptor.component';

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent extends InterceptorComponent implements OnInit {

  movies: Movie[] = [];
  movieId: number;
  isPrivate: boolean;

  constructor(private router: Router, private service: MoviesService) {
    super();
  }

  ngOnInit(): void {
  }

  lookupMovie(movieForm: NgForm): void{
    this.service.lookupMovie(movieForm.value.title).subscribe((response: Movie[]) => {
      this.movies = response;
    });
  }

  addMovie(onlineId: string): void{
    console.log(!this.isPrivate);
    this.service.addMovie(onlineId, !this.isPrivate).subscribe((response: Movie) => {
      this.movieId = response.id;
    });
    if (this.movieId != null){
      this.router.navigate(['movies/' + this.movieId]);
    }
  }

}
