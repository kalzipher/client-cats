import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CatService } from '../services/cat.service';
import { ICat } from '../services/cats.interface';

@Injectable()
export class CatsResolver implements Resolve<ICat[]> {

  constructor(
    private readonly catService: CatService
  ) {}

  resolve(): Observable<ICat[]> {
    return this.catService.getCats();
  }
}
