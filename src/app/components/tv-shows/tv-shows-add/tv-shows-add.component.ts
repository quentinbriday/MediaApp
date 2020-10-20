import { Component, OnInit } from '@angular/core';
import {InterceptorComponent} from '../../../interceptor/interceptor.component';
import {Movie} from '../../../model/movie.model';
import {Router} from '@angular/router';
import {MoviesService} from '../../movies/movies.service';
import {NgForm} from '@angular/forms';
import {TvShowsService} from '../tv-shows.service';

@Component({
  selector: 'app-tv-shows-add',
  templateUrl: './tv-shows-add.component.html',
  styleUrls: ['./tv-shows-add.component.css']
})
export class TvShowsAddComponent extends InterceptorComponent implements OnInit {

  movies: Movie[] = [];
  movieId: number;

  constructor(private router: Router, private service: TvShowsService) {
    super();
  }

  ngOnInit(): void {
  }

  lookupMovie(movieForm: NgForm): void{
    this.service.lookupTvShow(movieForm.value.title).subscribe((response: Movie[]) => {
      this.movies = response;
    });
  }

  addTvShow(onlineId: string): void{
    this.service.addTvShow(onlineId).subscribe((response: Movie) => {
      this.movieId = response.id;
    });
    if (this.movieId != null){
      this.router.navigate(['tvshows/' + this.movieId]);
    }
  }
}
