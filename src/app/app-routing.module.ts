import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./start/start.module").then(m => m.StartModule)
  },
  {
    path: "imagenes",
    loadChildren: () => import("./images/images.module").then(m => m.ImagesModule)
  },
  {
    path: "gatos",
    loadChildren: () => import("./cats/cats.module").then(m => m.CatsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
