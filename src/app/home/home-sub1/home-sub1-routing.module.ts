import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeSub1Component } from "./home-sub1/home-sub1.component";

const routes: Routes = [{ path: "", component: HomeSub1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeSub1RoutingModule {}
