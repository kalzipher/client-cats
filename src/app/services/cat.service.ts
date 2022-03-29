import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { ICat, ICatFavorite, ICatImage, ICatSave, ISaveCatImageFavorite, ISaveCatResponse } from './cats.interface';
import { environment } from "../../environments/environment";

@Injectable()
export class CatService {

  private api: string = environment.api;

  constructor(
    private readonly http: HttpClient
  ) { }

  public getCatsImages(): Observable<ICatImage[]> {
    const url: string = `${this.api}/imagenes`;
    return this.http.get<ICatImage[]>(url);
  }

  public saveCatAsFavorite(cat: ISaveCatImageFavorite): Observable<ISaveCatResponse> {
    const url: string = `${this.api}/imagenes/favoritos`;
    return this.http.post<ISaveCatResponse>(url, cat);
  }

  public getImagesCatsFavorites(): Observable<ICatFavorite[]> {
    const url: string = `${this.api}/imagenes/favoritos`;
    return this.http.get<ICatFavorite[]>(url);
  }

  public getCats(): Observable<ICat[]> {
    const url: string = `${this.api}/gatos`;
    return this.http.get<ICat[]>(url);
  }

  public getCatById(id: string): Observable<ICat> {
    const url: string = `${this.api}/gatos/${id}`;
    return this.http.get<ICat>(url);
  }

  public saveCat(cat: ICatSave): Observable<void> {
    const url = `${this.api}/gatos`;
    return this.http.post<void>(url, cat);
  }

  public deleteCat(id: string): Observable<void> {
    const url: string = `${this.api}/gatos/${id}`;
    return this.http.delete<void>(url);
  }
}
