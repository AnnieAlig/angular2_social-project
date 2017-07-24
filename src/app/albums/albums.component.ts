import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from '../_services/album.service';
import { ActivatedRoute } from '@angular/router'; //

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [AlbumService]
})
export class AlbumsComponent implements OnInit {

 
  albums;
  @Input() userId;
  
  constructor(
    private route: ActivatedRoute,
    private as: AlbumService
  ) { }

  ngOnInit() {
      this.as.getAlbums(this.userId).subscribe(albums=>{
      this.albums = albums;
    })
  }
}
