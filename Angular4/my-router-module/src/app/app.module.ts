import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { Routes } from '@angular/router/src/config';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import { MyMessageComponent } from './my-common/my-message/my-message.component';
import { MyCommonModule } from './my-common/my-common.module';

const config: Routes= [
  {
    path:"app",component:AppComponent
  },
  {
    path:"hello",component: HelloComponentComponent
  },
  {
    path:"message",component:MyMessageComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HelloComponentComponent
  ],
  imports: [
    BrowserModule,
    MyCommonModule,
    RouterModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
