import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
 <div [ngSwitch]="color">
  <div *ngSwitchCase=" 'red' ">yes it is red</div>
  <div *ngSwitchCase=" 'green' ">yes it is green</div>
  <div *ngSwitchCase=" 'blue' ">yes it is blue</div>
  <div *ngSwitchDefault>try again</div>
 </div>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
public color="red";
}
