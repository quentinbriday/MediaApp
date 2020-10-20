import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorComponent} from '../../interceptor/interceptor.component';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {MoviesDetailComponent} from './movies-detail/movies-detail.component';
import {MoviesAddComponent} from './movies-add/movies-add.component';
import {MovieComponent} from './movie/movie.component';
import {SearchComponent} from './search/search.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppRoutes} from '../../app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesDetailComponent,
    MoviesAddComponent,
    MovieComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorComponent,
    multi: true,
  }],
})
export class MoviesModule { }
