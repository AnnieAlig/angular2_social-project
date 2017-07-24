import { Component, OnInit, Input } from '@angular/core';
import { PhotosService } from '../_services/photos.service'

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [PhotosService]
})
export class PhotosComponent implements OnInit {

chosenPhoto;
photos;
 @Input() albumId;
  constructor(
    private phs: PhotosService
  ) { }

  ngOnInit() {
    this.phs.getPhotos(this.albumId).subscribe(photos=>{
      this.photos = photos;
    })
  }
  choosePhoto(url){
    this.chosenPhoto = url;
  }

  visibility:boolean = false;
  toggle(){
    this.visibility=!this.visibility;
  }
}
