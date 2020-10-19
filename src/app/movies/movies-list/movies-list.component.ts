import { Component, OnInit } from '@angular/core';
import {Movie} from '../../movie.model';
import {MoviesService} from '../movies.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {InterceptorComponent} from '../../interceptor/interceptor.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent extends InterceptorComponent implements OnInit {
  movies$: Observable<Movie[]>;
  isPrivate = false;

  constructor(private moviesService: MoviesService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(): void {
      this.movies$ = this.moviesService.getMovies(!this.isPrivate);
  }

  public redirectMovie(movie: Movie): void {
    this.router.navigate(['movies/' + movie.id]);
  }

  lookUpList(name: string): void{
    console.log(this.isPrivate);
    if (name !== ''){
      this.movies$ = this.moviesService.lookupMovie(name, false, !this.isPrivate);
    }
    else{
      this.getMovies();
    }
  }

}
