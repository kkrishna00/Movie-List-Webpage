import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './MyComponents/home-page/home-page.component';
import { MovieListPageComponent } from './MyComponents/movie-list-page/movie-list-page.component';
import { BookMarkPageComponent } from './MyComponents/book-mark-page/book-mark-page.component';
import { HttpClientModule } from '@angular/common/http';
import {
  NbSidebarModule,
  NbThemeModule,
  NbLayoutModule,
  NbIconModule,
  NbMenuModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbAccordionModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule } from '@angular/forms';
import { FetchMovieList } from './MyComponents/movie-list-page/FetchMovieList.component';
import { FetchMovieDetails } from './MyComponents/movie-list-page/FetchMovieDetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieListPageComponent,
    BookMarkPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbAccordionModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [FetchMovieList, FetchMovieDetails],
  bootstrap: [AppComponent],
})
export class AppModule {}
