import {Injectable} from '@angular/core';
import {Movie} from '../../model/movie.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[];

  getMovies(isPublic: boolean): Observable<Movie[]> {
    return this.client.get<Movie[]>(environment.apiUrl, {
      params: new HttpParams()
        .set('public', String(isPublic))
    });
  }

  getMovie(id: string): Observable<Movie> {
    return this.client.get<Movie>(environment.apiUrl + '/' + id);
  }

  lookupMovie(title: string, online?: boolean, isPublic?: boolean): Observable<Movie[]> {
    return this.client.get<Movie[]>(environment.apiUrl + '/search', {
      params: new HttpParams().set('title', title)
        .set('online', String(online))
        .set('public', String(isPublic))
    });
  }

  addMovie(onlineId: number, isPublic?: boolean): Observable<Movie> {
    const o = {
      apiId: onlineId
    };
    return this.client.post<Movie>(environment.apiUrl, o, {
      params: new HttpParams().set('public', String(isPublic))
    });
  }

  delete(id: number): Observable<any> {
    // return this.client.delete(environment.apiUrl + '/' + id).subscribe();
    // in some cases it's better to let the component subscribe to this
    return this.client.delete(environment.apiUrl + '/' + id);
  }

  constructor(private client: HttpClient) {
  }
}
