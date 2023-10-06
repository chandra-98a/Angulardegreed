import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div> welcome {{name}}</div>
<h2 [style.color]="hasError ? 'red' : 'green' " >Style Binding</h2>
<h2 [style.color]="highlightColor">Style property2</h2>
<h2 [ngStyle]="titleStyles">Style Property3</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit{
  public name="vishwas";
  public hasError=true;
  public highlightColor="Orange";
  public titleStyles={
    color: "blue",
    fontstyle: "italic"
  }

  constructor(){}

  ngOnInit(){}

}
