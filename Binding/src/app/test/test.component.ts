import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div> welcome {{name}}</div>
  <!--  <h2>{{2+2}}</h2>
  <h2>{{"goodbye"+name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetMessage()}} -->

<input [id]="myId" type="text" value="vishwas"/>
<input bind-disabled="isDisabled" id="{{myId}}" type="text" value="vishwas"/>
  `,
  styles: []
})
export class TestComponent implements OnInit{
  public name="vishwas"
  public myId="testId";
  public isDisabled=true;
  constructor(){}
  greetMessage(){
return "Hello"+this.name;
  }
  ngOnInit(){}

}
