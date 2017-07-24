import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  
  users;
  constructor(
    private us: UsersService
  ) { }

  ngOnInit() {
    this.us.getUsers().subscribe( res => {
      this.users = res;
    } )
  }

}
