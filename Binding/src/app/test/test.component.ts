import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div> welcome {{name}}</div>
<input #myInput type="text"/>
<button (click)="logMessage(myInput)">log</button>
  `,
  styles: []
})
export class TestComponent implements OnInit{
  public name="vishwas";
  constructor(){}
logMessage(value: any){
console.log(value)
}
  ngOnInit(){}

}
