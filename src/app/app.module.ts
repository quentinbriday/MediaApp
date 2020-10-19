import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { AppRoutes} from './app.routes';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MoviesAddComponent } from './movies/movies-add/movies-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MovieComponent } from './movies/movie/movie.component';
import { SearchComponent } from './movies/search/search.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import {MoviesModule} from './movies/movies.module';
import {TvShowsModule} from './tv-shows/tv-shows.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    InterceptorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MoviesModule,
    TvShowsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
