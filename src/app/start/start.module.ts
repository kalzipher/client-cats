import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';

@NgModule({
  declarations: [...StartRoutingModule.components],
  imports: [
    CommonModule,
    StartRoutingModule
  ]
})
export class StartModule { }
