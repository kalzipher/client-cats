import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CatService } from '../services/cat.service';
import { ICatFavorite } from '../services/cats.interface';

@Injectable({
  providedIn: 'root'
})
export class CatsFavoritesResolver implements Resolve<ICatFavorite[]> {
  
  constructor(
    private readonly catService: CatService
  ) {}

  resolve(): Observable<ICatFavorite[]> {
    return this.catService.getImagesCatsFavorites();
  }
}
