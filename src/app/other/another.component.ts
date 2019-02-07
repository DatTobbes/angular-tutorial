import { Component } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <p>another Works!</p>
    <hr>
    <ng-content></ng-content>
  `,
  styles: []
})
export class AnotherComponent {}

