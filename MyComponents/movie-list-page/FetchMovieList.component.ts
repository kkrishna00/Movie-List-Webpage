import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import 'rxjs';
@Injectable()
export class FetchMovieList {
  searchMovieByTitle(title: string) {
    const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=1ddee4bf';
    return this.http.get(url).pipe(
      map((response: Response) => {
        console.log(response);
        return response;
      })
    );
  }
  constructor(private http: HttpClient) {}
}
