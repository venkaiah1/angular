import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "HomeSub",
    loadChildren: "./home-sub1/home-sub1.module#HomeSub1Module"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
