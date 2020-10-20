import {Component, OnInit} from '@angular/core';
import {Movie} from '../../../model/movie.model';
import {MoviesService} from '../movies.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {InterceptorComponent} from '../../../interceptor/interceptor.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent extends InterceptorComponent implements OnInit {
  movies$: Observable<Movie[]>;
  isPrivate = false;
  private lookupName: string;

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
    this.router.navigate(['/movies', movie.id]);
  }

  lookUpList(name: string): void {
    console.log(this.isPrivate);
    if (name !== '' && name !== undefined) {
      this.lookupName = name; // store name in case you check/uncheck the private checkbox
      this.movies$ = this.moviesService.lookupMovie(this.lookupName, false, !this.isPrivate);
    } else {
      this.getMovies();
    }
  }

  loadMovies(): void {
    this.isPrivate = !this.isPrivate;
    this.lookUpList(this.lookupName);
  }
}
