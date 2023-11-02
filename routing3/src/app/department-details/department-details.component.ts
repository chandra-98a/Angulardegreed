import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentListComponent } from '../department-list/department-list.component';
@Component({
  selector: 'app-department-details',
  template: `
  <h3>You have selected with id= {{departmentId}}</h3>`,
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId:any;

constructor(private route: ActivatedRoute){}
ngOnInit(){

  let id= parseInt(this.route.snapshot.paramMap.get('id'));
  this.departmentId=id;
}
}
