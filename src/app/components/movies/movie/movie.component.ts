import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../../../model/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
