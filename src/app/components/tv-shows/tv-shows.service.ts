import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../../model/movie.model';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  getTvShows(): Observable<Movie[]> {
    return this.client.get<Movie[]>(environment.tvShowsUrl);
  }

  getTvShow(id: string): Observable<Movie> {
    return this.client.get<Movie>(environment.tvShowsUrl + '/' + id);
  }

  lookupTvShow(title: string, online?: boolean): Observable<Movie[]>{
    return this.client.get<Movie[]>(environment.tvShowsUrl + '/search', {
      params: new HttpParams().set('title', title)
        .set('online', String(online))
    });
  }

  addTvShow(onlineId: string): Observable<Movie> {
    const o = {
      apiId: onlineId
    };
    return this.client.post<Movie>(environment.tvShowsUrl + '/watchlist', o);
  }

  // delete(id: number): void {
  //   this.client.delete(environment.apiUrl + '/' + id).subscribe();
  // }

  constructor(private client: HttpClient) {
  }
}
