import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { CatService } from '../services/cat.service';
import { ICat } from '../services/cats.interface';

@Injectable()
export class ImagesResolver implements Resolve<any> {

  constructor(
    private readonly catService: CatService
  ) {}

  resolve(): Observable<ICat> {
    return this.catService.getCats().pipe(tap(console.log)); 
  }
}
