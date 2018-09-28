import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderSub1RoutingModule } from './header-sub1-routing.module';
import { Headersub1Component } from '../headersub1/headersub1.component';


@NgModule({
  imports: [
    CommonModule,
    HeaderSub1RoutingModule
  ],
  declarations: [Headersub1Component]
})
export class HeaderSub1Module { }
