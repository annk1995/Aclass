import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  clicks = 0

  constructor() { }

  ngOnInit(): void {

  }
  MyCoolButtonClicked() {
    console.log('cool button clicked');
    this.clicks++;
  }
   showInput(el:any){
     console.log('show input')

   }
}
