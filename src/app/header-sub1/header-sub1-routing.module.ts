import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Headersub1Component } from "../headersub1/headersub1.component";

const routes: Routes = [{ path: "", component: Headersub1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderSub1RoutingModule {}
