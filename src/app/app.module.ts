import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {AppRoutes} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InterceptorComponent} from './interceptor/interceptor.component';
import {MoviesModule} from './components/movies/movies.module';
import {TvShowsModule} from './components/tv-shows/tv-shows.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    InterceptorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, {useHash: true}),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MoviesModule,
    TvShowsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
