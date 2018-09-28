import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeSub1RoutingModule } from "./home-sub1-routing.module";
import { HomeSub1Component } from "./home-sub1/home-sub1.component";
@NgModule({
  imports: [CommonModule, HomeSub1RoutingModule],
  declarations: [HomeSub1Component]
})
export class HomeSub1Module {}
