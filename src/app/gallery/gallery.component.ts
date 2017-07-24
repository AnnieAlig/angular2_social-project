import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../_services/album.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [AlbumService]
})
export class GalleryComponent implements OnInit {

  id;
  album;
  constructor(
    private route: ActivatedRoute,
    private as: AlbumService
  ) { }

  ngOnInit() {
    this.getAlbumId();
    this.getAlbumData();
  }

  getAlbumId(){
    this.route.params.subscribe( params => {
      this.id = params['id'];
    } )
  }

  getAlbumData(){
    this.as.getAlbum( this.id ).subscribe( album => {
      this.album = album;
    } )
  }

}