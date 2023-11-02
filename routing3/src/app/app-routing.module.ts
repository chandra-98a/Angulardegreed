import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
 {path:'',redirectTo:'/department-list', pathMatch:'full'},
 {path:'department-list',component:DepartmentListComponent},
 {path:'departments/:id',component:DepartmentDetailsComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  EmployeeListComponent,
  DepartmentListComponent,
  DepartmentDetailsComponent
]
