import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CatService } from "./cat.service";

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [CatService],
})
export class ServicesModule { }
