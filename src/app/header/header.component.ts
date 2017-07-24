import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../_services/users.service';
import { CURRENTUSER } from '../current-user';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers : [UsersService]
})
export class HeaderComponent implements OnInit {
  CurrentUser = CURRENTUSER['id'];
  @Input() userId;
  constructor(
    private us: UsersService
  ) { }

  ngOnInit() {
    this.us.getMyUser(this.CurrentUser).subscribe( res => {
      this.CurrentUser = res;
    } )
  }

}
