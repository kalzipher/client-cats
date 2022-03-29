import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { CatService } from '../services/cat.service';
import { ICat } from '../services/cats.interface';

@Injectable({
  providedIn: 'root'
})
export class ToUpdateCatResolver implements Resolve<ICat | null> {
  
  constructor(
    private readonly catService: CatService
  ) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<ICat | null> {
    const id: string = route.queryParams["id"];
    if (id) {
      return this.catService.getCatById(id);
    }
    return of(null);
  }
}
