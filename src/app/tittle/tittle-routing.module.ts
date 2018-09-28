import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TittleComponent, } from './tittle.component';

const routes: Routes = [{ path: "", component: TittleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TittleRoutingModule {}