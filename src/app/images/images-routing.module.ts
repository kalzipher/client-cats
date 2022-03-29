import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './images.component';
import { ImagesResolver } from "./images.resolver";

const routes: Routes = [
  {
    path: "",
    component: ImagesComponent,
    resolve: {
      images: ImagesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule {
  static components = [ImagesComponent]
  static resolvers = [ImagesResolver]

}
