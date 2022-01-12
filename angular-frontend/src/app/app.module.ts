import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateVenteeComponent } from './create-ventee/create-ventee.component';
import { UpdateVenteeComponent } from './update-ventee/update-ventee.component';
import { VenteeDetailsComponent } from './ventee-details/ventee-details.component';
import { VenteeListComponent } from './ventee-list/ventee-list.component';
import { CreateStockeComponent } from './create-stocke/create-stocke.component';
import { UpdateStockeComponent } from './update-stocke/update-stocke.component';
import { StockeDetailsComponent } from './stocke-details/stocke-details.component';
import { StockeListComponent } from './stocke-list/stocke-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    CreateVenteeComponent,
    UpdateVenteeComponent,
    VenteeDetailsComponent,
    VenteeListComponent,
    CreateStockeComponent,
    UpdateStockeComponent,
    StockeDetailsComponent,
    StockeListComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
