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

import { CreateStockeComponent } from './create-stocke/create-stocke.component';
import { UpdateStockeComponent } from './update-stocke/update-stocke.component';
import { StockeDetailsComponent } from './stocke-details/stocke-details.component';
import { StockeListComponent } from './stocke-list/stocke-list.component';
import { CreateVenteeComponent } from './create-ventee/create-ventee.component';
import { UpdateVenteeComponent } from './update-ventee/update-ventee.component';
import { VenteeDetailsComponent } from './ventee-details/ventee-details.component';
import { VenteeListComponent } from './ventee-list/ventee-list.component';
import { CreateProduiteComponent } from './create-produite/create-produite.component';
import { UpdateProduiteComponent } from './update-produite/update-produite.component';
import { ProduiteDetailsComponent } from './produite-details/produite-details.component';
import { ProduiteListComponent } from './produite-list/produite-list.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { CreateFournisseureComponent } from './create-fournisseure/create-fournisseure.component';
import { UpdateFournisseureComponent } from './update-fournisseure/update-fournisseure.component';
import { FournisseureDetailsComponent } from './fournisseure-details/fournisseure-details.component';
import { FournisseureListComponent } from './fournisseure-list/fournisseure-list.component';
import { CreateAchateComponent } from './create-achate/create-achate.component';
import { UpdateAchateComponent } from './update-achate/update-achate.component';
import { AchateDetailsComponent } from './achate-details/achate-details.component';
import { AchateListComponent } from './achate-list/achate-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,

    CreateStockeComponent,
    UpdateStockeComponent,
    StockeDetailsComponent,
    StockeListComponent,
    CreateVenteeComponent,
    UpdateVenteeComponent,
    VenteeDetailsComponent,
    VenteeListComponent,
    CreateProduiteComponent,
    UpdateProduiteComponent,
    ProduiteDetailsComponent,
    ProduiteListComponent,
    CreateClienteComponent,
    UpdateClienteComponent,
    ClienteDetailsComponent,
    ClienteListComponent,
    CreateFournisseureComponent,
    UpdateFournisseureComponent,
    FournisseureDetailsComponent,
    FournisseureListComponent,
    CreateAchateComponent,
    UpdateAchateComponent,
    AchateDetailsComponent,
    AchateListComponent,

    

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
