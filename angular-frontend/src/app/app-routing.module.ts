import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { StockeDetailsComponent } from './stocke-details/stocke-details.component';
import { StockeListComponent } from './stocke-list/stocke-list.component';
import { CreateStockeComponent } from './create-stocke/create-stocke.component';
import { UpdateStockeComponent } from './update-stocke/update-stocke.component';




const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'stockes', component: StockeListComponent},
  {path: 'create-stocke', component: CreateStockeComponent},
  {path: '', redirectTo: 'stockes', pathMatch: 'full'},
  {path: 'update-stocke/:id', component: UpdateStockeComponent},
  {path: 'stocke-details/:id', component: StockeDetailsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
