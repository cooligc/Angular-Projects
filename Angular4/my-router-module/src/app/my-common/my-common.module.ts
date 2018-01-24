import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMessageComponent } from './my-message/my-message.component';
import { Routes } from '@angular/router/src/config';


const config: Routes = [
  {
    path:"message",component:MyMessageComponent
  }
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyMessageComponent]
})
export class MyCommonModule { }
