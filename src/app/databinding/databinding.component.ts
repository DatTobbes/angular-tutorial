import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  aString = 'Ich bin ein String';
  aNumber = 100;
  attachClass = false;
  constructor() {
    setTimeout( () => {
      this.aNumber += 200;
      this.attachClass = true;
    }, 3000);
  }

  ngOnInit() {
  }
  onClick(event: Event) {
    console.log(event);
  }
}
