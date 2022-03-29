import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICat as ICatImages } from '../services/cats.interface';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
    
    public images: ICatImages[] = [];

    constructor(
        private readonly activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.activatedRoute.data.subscribe((response: any) => {
        this.images = response.images;
      });
  }
}
