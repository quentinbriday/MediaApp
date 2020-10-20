import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppRoutes} from '../../app.routes';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InterceptorComponent} from '../../interceptor/interceptor.component';
import { TvShowsListComponent } from './tv-shows-list/tv-shows-list.component';
import { TvShowsSearchComponent } from './tv-shows-search/tv-shows-search.component';
import { TvShowsDetailComponent } from './tv-shows-detail/tv-shows-detail.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { TvShowsAddComponent } from './tv-shows-add/tv-shows-add.component';



@NgModule({
  declarations: [
    TvShowsListComponent,
    TvShowsSearchComponent,
    TvShowsDetailComponent,
    TvShowComponent,
    TvShowsAddComponent,
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
export class TvShowsModule { }
