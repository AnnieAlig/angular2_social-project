import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../_services/comments.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentsService]
})
export class CommentsComponent implements OnInit {

  comments;
  @Input()postId;
  constructor(
    private cs: CommentsService,
    private route: ActivatedRoute
    
  ) { }

  ngOnInit() {
    this.getPostId();
    this.getCommentsData();
  }
  getPostId(){
    this.route.params
      .subscribe( params => {
        this.postId = params ['id'];
      })
  }

  getCommentsData(){
    this.cs.getComments(this.postId)
      .subscribe(comments => {
        this.comments = comments;
     
      })
  }
}


