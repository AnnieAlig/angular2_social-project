import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AlbumService {

  constructor(
    private http: Http
  ) { }

 getAlbums(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/albums?userId=' + userId)
      .map( item => {
        return item.json();
      } )
  }

  getAlbum(a_id?){
    if(a_id){
      return this.http.get('https://jsonplaceholder.typicode.com/albums/' + a_id)
      .map( item => {
         return item.json();
      } )
  } else{
    return this.http.get('https://jsonplaceholder.typicode.com/albums')
         .map( item => {
           return item.json();
       } )
  }
}
}
