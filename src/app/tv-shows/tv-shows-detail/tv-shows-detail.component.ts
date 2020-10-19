import { Component, OnInit } from '@angular/core';
import {InterceptorComponent} from '../../interceptor/interceptor.component';
import {Movie} from '../../movie.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesService} from '../../movies/movies.service';
import {TvShowsService} from '../tv-shows.service';

@Component({
  selector: 'app-tv-shows-detail',
  templateUrl: './tv-shows-detail.component.html',
  styleUrls: ['./tv-shows-detail.component.css']
})
export class TvShowsDetailComponent extends InterceptorComponent implements OnInit {

  movie: Movie;
  private id: string = this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute, private service: TvShowsService, private router: Router) {
    super();
  }


  ngOnInit(): void {
    this.service.getTvShow(this.id).subscribe(movie => this.movie = movie);
  }

  // delete(): void {
  //   if (this.movie != null) {
  //     this.service.delete(this.movie.id);
  //     this.router.navigate(['movies/']);
  //   }
  // }

  nothing($event: any): void {
  }
}
