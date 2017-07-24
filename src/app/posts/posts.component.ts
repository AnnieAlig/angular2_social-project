import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { PostsService } from '../_services/posts.service';
import { CURRENTUSER } from '../current-user';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent implements OnChanges {

CurrentUser = CURRENTUSER['id'];
posts;
newPost;
 @Input() userId;
 @Output() addingNewPost = new EventEmitter();
  constructor(
    private ps: PostsService
  ) { }

  ngOnChanges() {
    
    this.ps.getPosts(this.userId).subscribe(posts=>{
      this.posts = posts;
    })
  }

  addNewPost(newPostTitle, newPostBody){
    let newPost={
      title: newPostTitle.value,
      body: newPostBody.value
    }
     this.ps.addNewPost(newPost)
      .subscribe( res => {
        this.posts.push( res.json()),
        newPostTitle.value = '',
        newPostBody.value = '';
      })
}

}