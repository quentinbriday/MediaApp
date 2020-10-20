import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-shows-search',
  templateUrl: './tv-shows-search.component.html',
  styleUrls: ['./tv-shows-search.component.css']
})
export class TvShowsSearchComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  triggerName(name: string): string{
    return name;
  }

}
