import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../../movie.model';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  triggerName(name: string): string{
    return name;
  }

}
