import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [
    ...ImagesRoutingModule.components,
  ],
  providers: [
    ...ImagesRoutingModule.resolvers
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    ServicesModule
  ]
})
export class ImagesModule { }
