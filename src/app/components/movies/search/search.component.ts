import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search$ = new Subject<string>();
  @Output()
  searched = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    // use observables and event emitter to send data to the parent component
    // debounceTime is used to add some delay in sending it. so you don't spam te backend with requests.
    this.search$
      .pipe(debounceTime(400), filter(x => x.length > 2), distinctUntilChanged())
      .subscribe(x => this.searched.next(x));
  }

}
