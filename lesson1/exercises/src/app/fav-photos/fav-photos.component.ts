import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Happy Images Space';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://cdn2.bulbagarden.net/upload/b/b0/Celebi_M04.png';
  image3 = 'https://www.dierbergs.com/-/media/Corporate/Images/Galleries/Images/539-x-279-FAQ.ashx?h=279&la=en&w=539';

  constructor() { }

  ngOnInit() {
  }

}