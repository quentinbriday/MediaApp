import { Component, OnInit } from '@angular/core';
import {Movie} from './movie.model';
import {MoviesService} from './movies/movies.service';
import {MoviesListComponent} from './movies/movies-list/movies-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-exercices-projects';

  ngOnInit(): void {
  }
}
