import { Component, Input, OnInit } from '@angular/core';
import { FetchMovieList } from './FetchMovieList.component';
import { FetchMovieDetails } from './FetchMovieDetails.component';
@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.css'],
})
export class MovieListPageComponent implements OnInit {
  title: string;
  MovieList: any;
  MovieDetails: any;
  constructor(
    private FetchDetail: FetchMovieDetails,
    private FetchMovie: FetchMovieList
  ) {}

  //search movie by their title
  searchMovie = (title: String) => {
    this.FetchMovie.searchMovieByTitle(this.title).subscribe((result) => {
      this.MovieList = result;
    });
    console.log(this.MovieList);
  };

  //return movie detail
  searchAboutMovie = (imdb: string) => {
    this.FetchDetail.searchMovieDetail(imdb).subscribe((result) => {
      this.MovieDetails = result;
      console.log(this.MovieDetails);
    });
  };

  //bookmarkmovie section
  bookMarkedMovies = JSON.parse(localStorage.getItem('movie'));
  bookMarkMovie(movie: any) {
    console.log(movie);
    this.bookMarkedMovies.push(movie);
    console.log(this.bookMarkedMovies);
    localStorage.setItem('movie', JSON.stringify(this.bookMarkedMovies));
    console.log(localStorage.getItem('movie'));
  }
  ngOnInit(): void {}
}
