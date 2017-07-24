import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(
    private http: Http
  ) { }

  getUsers( id? ){
   if( id ){
      return this.http.get('https://jsonplaceholder.typicode.com/users/' + id)
    .map(item=>{
      return item.json();
    })
  }  else{
      return this.http.get('https://jsonplaceholder.typicode.com/users')
    .map(item=>{
      return item.json();
    })
    }
    
  }
  getMyUser(CurrentUser){
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + CurrentUser)
    .map(item=>{
      return item.json();
    })
  }
}
