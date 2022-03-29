import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsFavoritesResolver } from './cats-favorites.resolver';
import { CatsComponent } from './cats.component';
import { CatsResolver } from './cats.resolver';
import { CrearGatoComponent } from './pages/crear-gato/crear-gato.component';
import { ToUpdateCatResolver } from "./to-update-cat.resolver";

const routes: Routes = [
  {
    path: "",
    component: CatsComponent,
    resolve: {
      cats: CatsResolver
    }
  },
  {
    path: "crear",
    component: CrearGatoComponent,
    resolve: {
      favorites: CatsFavoritesResolver,
      cat: ToUpdateCatResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsRoutingModule {
  static components = [
    CatsComponent,
    CrearGatoComponent
  ];

  static resolvers = [
    CatsResolver,
    CatsFavoritesResolver,
    ToUpdateCatResolver
  ];
}
