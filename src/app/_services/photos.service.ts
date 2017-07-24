import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotosService {

  constructor(
    private http: Http
  ) { }

getPhotos(albumId){
      return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId)
      .map( item => {
        return item.json();
      } )
 
    }
  
}