import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  if_like:boolean = true;
  toggle(){
    this.if_like=!this.if_like
  }
}
