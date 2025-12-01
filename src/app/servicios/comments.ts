import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {

  private url = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) { }

  public getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url);
  }

}
