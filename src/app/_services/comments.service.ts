import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService {

  constructor(
    private http: Http
  ) { }

   getComments(postId) {
      return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
      .map( item => {
        return item.json();
        })
    }

}
