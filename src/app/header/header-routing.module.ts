import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "./header.component";
const routes: Routes = [
  { path: "", component: HeaderComponent },
  {
    path: "sub",
    loadChildren: "../header-sub1/header-sub1.module#HeaderSub1Module"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule {}
