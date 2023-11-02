import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <h3>DepartmentList</h3>
  <ul class="items">
    <li (click)="onSelect(department)" *ngFor="let department of departments">
      <span class="badge">{{department.id}}</span>{{department.name}}
    </li>
</ul>`,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent{
departments=[
  {"id":1,"name":"Angular"},
  {"id":2,"name":"MongoDB"},
  {"id":3,"name":"NodeJs"},
  {"id":4,"name":"SpringBoot"},
  {"id":5,"name":"CoreJava"}
]
constructor(private router:Router){}
onSelect(department: { id: any; }){
  this.router.navigate(['/departments',department.id])
}


}
