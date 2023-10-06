import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div> welcome {{name}}</div>
<button (click)="onClick($event)">greet</button>
<button (click)="greeting='welcome vishwas'">Here</button>
{{greeting}}
  `,
  styles: []
})
export class TestComponent implements OnInit{
  public name="vishwas";
public greeting="";
 /*  onClick(){
console.log(`welcome to event binding`)
this.greeting='welcome here';
  } */
onClick(event:any){
console.log(event)
this.greeting=event.type;
}
  constructor(){}

  ngOnInit(){}

}
