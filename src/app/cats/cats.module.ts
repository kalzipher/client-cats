import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';

@NgModule({
  declarations: [...CatsRoutingModule.components],
  imports: [
    CommonModule,
    CatsRoutingModule,
  ]
})
export class CatsModule { }
