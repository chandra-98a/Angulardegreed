import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div> welcome {{name}}</div>
   <h2>{{2+2}}</h2>
  <h2>{{"goodbye"+name}}</h2>`,
  styles: []
})
export class TestComponent implements OnInit{
  public name="vishwas"
  constructor(){}
  ngOnInit(){}

}
