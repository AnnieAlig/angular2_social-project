import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PostsService } from '../_services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
  providers: [PostsService]
})
export class SinglePostComponent implements OnInit {
  
  currentPost;
  @Input()postId;
  @Input()posts;
  constructor(
    private ps: PostsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPostId();
    this.getCurrentPost(this.postId);
  }
  getPostId(){
    this.route.params
      .subscribe( params => {
        this.postId = params ['id'];       
      })
      
      
  }
   getCurrentPost(postId){
   this.ps.getCurrentPost(this.postId).subscribe(res=>{
      this.currentPost = res.json();
    })
    
   }
  
  visibility: boolean = true;
  toggle(){
    this.visibility=!this.visibility;
  }
}

