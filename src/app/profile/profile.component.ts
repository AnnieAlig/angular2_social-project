import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UsersService]
})

export class ProfileComponent implements OnInit {
  
 
  id;
  user;
  constructor(
    private route: ActivatedRoute,
    private us: UsersService
  ) { }

  ngOnInit() {
    this.getId();
    this.getUserData();
  }

  getId(){
    this.route.params.subscribe( params => {
      this.id = +params['id'];
    } )
  }

  getUserData(){
    this.us.getUsers( this.id ).subscribe( user => {
      this.user = user;
    } )
  }

}