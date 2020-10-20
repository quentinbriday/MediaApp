import {Routes} from '@angular/router';
import {MoviesListComponent} from './components/movies/movies-list/movies-list.component';
import {MoviesDetailComponent} from './components/movies/movies-detail/movies-detail.component';
import {AppComponent} from './app.component';
import {MoviesAddComponent} from './components/movies/movies-add/movies-add.component';
import {TvShowsListComponent} from './components/tv-shows/tv-shows-list/tv-shows-list.component';
import {TvShowsSearchComponent} from './components/tv-shows/tv-shows-search/tv-shows-search.component';
import {TvShowsDetailComponent} from './components/tv-shows/tv-shows-detail/tv-shows-detail.component';
import {TvShowsAddComponent} from './components/tv-shows/tv-shows-add/tv-shows-add.component';

export const AppRoutes: Routes = [
  {path: 'movies', component: MoviesListComponent},
  {path: 'movies/add', component: MoviesAddComponent},
  {path: 'movies/:id', component: MoviesDetailComponent},
  {path: 'tvshows', component: TvShowsListComponent},
  {path: 'tvshows/search', component: TvShowsAddComponent},
  {path: 'tvshows/:id', component: TvShowsDetailComponent},
  {path: '**', redirectTo: 'movies', pathMatch: 'full'}
];
