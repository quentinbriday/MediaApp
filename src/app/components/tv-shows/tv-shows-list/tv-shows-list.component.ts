import { Component, OnInit } from '@angular/core';
import {InterceptorComponent} from '../../../interceptor/interceptor.component';
import {Observable} from 'rxjs';
import {Movie} from '../../../model/movie.model';
import {MoviesService} from '../../movies/movies.service';
import {Router} from '@angular/router';
import {TvShowsService} from '../tv-shows.service';

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.css']
})
export class TvShowsListComponent extends InterceptorComponent implements OnInit {
  tvShows$: Observable<Movie[]>;
  // isPrivate = false;

  constructor(private tvShowsService: TvShowsService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.getTvShows();
  }

  private getTvShows(): void {
    this.tvShows$ = this.tvShowsService.getTvShows();
  }

  public redirectTvShow(movie: Movie): void {
    this.router.navigate(['tvshows/' + movie.id]);
  }

  lookUpList(name: string): void{
    if (name !== ''){
      this.tvShows$ = this.tvShowsService.lookupTvShow(name, false);
    }
    else{
      this.getTvShows();
    }
  }

}
