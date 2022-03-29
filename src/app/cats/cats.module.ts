import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { ServicesModule } from "../services/services.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  providers: [...CatsRoutingModule.resolvers],
  declarations: [...CatsRoutingModule.components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CatsRoutingModule,
    ServicesModule
  ]
})
export class CatsModule { }
