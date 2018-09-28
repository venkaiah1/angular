import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TittleComponent } from './tittle.component';
import { TittleRoutingModule }from './tittle-routing.module';



@NgModule({
  imports: [
    CommonModule,TittleRoutingModule],
  declarations: [TittleComponent]
})
export class TittleModule { }
