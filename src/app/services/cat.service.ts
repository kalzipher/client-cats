import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { ICat } from './cats.interface';

@Injectable()
export class CatService {

  private api: string = environment.api;

  constructor(
    private readonly http: HttpClient
  ) { }

  public getCats(): Observable<ICat> {
    const url: string = `${this.api}/imagenes`;
    return this.http.get<ICat>(url);
  }
}
