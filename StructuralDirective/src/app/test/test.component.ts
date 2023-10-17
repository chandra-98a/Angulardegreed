import { Component , OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <h2> {{"hello "+ name}}</h2>
  <button (click)="fireEvent()">send event</button>` ,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
ngOnInit(){

}
@Input('parentData') public name: any;
@Output() public childEvent=new EventEmitter();
fireEvent(){
  this.childEvent.emit('hey codeevolution');
}


}
