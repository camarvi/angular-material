import { Component, OnInit } from '@angular/core';

import { PhotosService } from '../../services/photos.service';
import { Photo } from '../../models/Photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos : Photo[] = [];

  constructor(public photosServices: PhotosService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
 
    this.photosServices.getPhotos()
     .subscribe(
       photos => {
         console.log(photos);
         this.photos = photos;
       },
       err => console.log(err)
     )
    
  }

  click(): void {
    alert("Pulsadoooo");
  }

}
