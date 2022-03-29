import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { CatService } from '../services/cat.service';
import { ICatImage, ISaveCatImageFavorite } from '../services/cats.interface';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
    
  public images: ICatImage[] = [];
  public isSending: boolean = false;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly catService: CatService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.images = response.images;
    });
  }

  public markAsFavorite(cat: ICatImage) {
    const catToSave: ISaveCatImageFavorite = {
      image_id: cat.id,
    };
    this.isSending = true;
    this.catService.saveCatAsFavorite(catToSave)
      .pipe(
        finalize(() => this.isSending = false)
      )
      .subscribe(() => {
        alert("Gato agregado como favorito");
      });
  }

  public getMore(): void {
    this.catService.getCatsImages().subscribe({
      next: (images: ICatImage[]) => {
        this.images = images;
      }
    })
  }
}
