import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Movie} from '../../movie.model';
import {MoviesService} from '../movies.service';
import {Subscription} from 'rxjs';
import {InterceptorComponent} from '../../interceptor/interceptor.component';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent extends InterceptorComponent implements OnInit {

  movie: Movie;
  private id: string = this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute, private service: MoviesService, private router: Router) {
    super();
  }



  ngOnInit(): void {
    this.service.getMovie(this.id).subscribe(movie => this.movie = movie);
  }

  delete(): void {
    if (this.movie != null){
      this.service.delete(this.movie.id);
      this.router.navigate(['movies/']);
    }
  }

  nothing($event: any): void {
  }
}
