import { Component, OnInit } from '@angular/core';

import { PhotosService } from './services/photos.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'angular-material7';


 albumsId =[1,2,3,4]; 

 constructor(public photosServices : PhotosService){}



}
