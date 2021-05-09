import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import 'rxjs';
@Injectable()
export class FetchMovieDetails {
  searchMovieDetail(imdb: string) {
    console.log(imdb);
    const url = 'http://www.omdbapi.com/?apikey=1ddee4bf&i=' + imdb;
    return this.http.get(url).pipe(
      map((response: Response) => {
        console.log(response);
        return response;
      })
    );
  }
  constructor(private http: HttpClient) {}
}
