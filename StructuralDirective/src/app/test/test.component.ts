import { Component , OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <h2> {{"hello "+ name}}</h2>` ,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
ngOnInit(){

}
@Input('parentData') public name: any;


}
