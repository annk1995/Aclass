import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './mycomponent/my-component/my-component.component';
import { DataBindingComponent } from './databinding/data-binding/data-binding.component';
import { PropertyBindingComponent } from './basics/property-binding/property-binding.component';
import { EventBindingComponent } from './basics/event-binding/event-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    DataBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
