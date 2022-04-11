import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './mycomponent/my-component/my-component.component';
import { DataBindingComponent } from './databinding/data-binding/data-binding.component';
import { PropertyBindingComponent } from './basics/property-binding/property-binding.component';
import { EventBindingComponent } from './basics/event-binding/event-binding.component';
import { TwowayBindingComponent } from './basics/twoway-binding/twoway-binding.component';
import { DirectivesComponent } from './basics/directives/directives.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    DataBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    DirectivesComponent

  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
