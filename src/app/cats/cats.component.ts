import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { CatService } from '../services/cat.service';
import { ICat } from '../services/cats.interface';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  public cats: ICat[] = [];

  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly catService: CatService
  ) { }
  
  ngOnInit(): void {
    this.activeRoute.data.subscribe((resolvedData: Data) => this.cats = resolvedData["cats"] as ICat[]);
  }

  public deleteCat(id: string, index: number) {
    this.catService.deleteCat(id).subscribe({
      next: () => {
        this.cats.splice(index, 1);
      }
    });
  }
}
