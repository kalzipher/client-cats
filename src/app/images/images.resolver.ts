import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CatService } from '../services/cat.service';
import { ICatImage } from '../services/cats.interface';

@Injectable()
export class ImagesResolver implements Resolve<any> {

  constructor(
    private readonly catService: CatService
  ) {}

  resolve(): Observable<ICatImage[]> {
    return this.catService.getCatsImages(); 
  }
}
