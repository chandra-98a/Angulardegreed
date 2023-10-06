import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div> welcome {{name}}</div>
  <h2 class="text-success">Namaste</h2>
 <h2 [class]="successClass">Namaste</h2>

<h2 [class.text-danger]="hasError">Namaste</h2>
<h2 [ngClass]="messageClass">Namaste</h2>

  <!-- interpolation
     <h2>{{2+2}}</h2>
  <h2>{{"goodbye"+name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetMessage()}} -->
<!-- property binding
<input [id]="myId" type="text" value="vishwas"/>
<input bind-disabled="isDisabled" id="{{myId}}" type="text" value="vishwas"/> -->
  `,
  styles: [`
  .text-success{
      color: green;
    },
    .text-danger{
      color: red;
    },
    .text-special{
      font-style: italic;
    }`
  ]
})
export class TestComponent implements OnInit{
  public name="vishwas";
  public successClass="text-success";
  public hasError=true;
  public isSpecial=true;
  public messageClass={
    "text-success":!this.hasError,
    "text-special":this.isSpecial,
    "text-danger":this.hasError
  }

 /*  public myId="testId";
  public isDisabled=true; */
  constructor(){}

  ngOnInit(){}
/* greetMessage(){
return "Hello"+this.name;
  } */
}
