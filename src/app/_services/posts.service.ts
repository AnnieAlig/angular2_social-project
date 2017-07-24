import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(
    private http: Http
  ) { }

  getPosts(userId?){
    if(userId){
      return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
      .map( item => {
        return item.json();
      } )
    } else{
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map( item => {
          return item.json();
      } )
    }
  }

  addNewPost(newPost){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', newPost)
 }

  getCurrentPost(postId){
      return this.http.get('https://jsonplaceholder.typicode.com/posts/' + postId)
      
    } 

}

