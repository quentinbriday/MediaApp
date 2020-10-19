import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../../movie.model';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  @Input() movie: Movie;
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
