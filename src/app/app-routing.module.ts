import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "Home", loadChildren: "./home/home.module#HomeModule" },
  { path: "Login", loadChildren: "./login/login.module#LoginModule" },
  { path: "Profile", loadChildren: "./profile/profile.module#ProfileModule" },
  { path: "header", loadChildren: "./header/header.module#HeaderModule"},
  { path: "tittle", loadChildren:"./tittle/tittle.module#TittleModule"},
  {
    path: "Register",
    loadChildren: "./register/register.module#RegisterModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
