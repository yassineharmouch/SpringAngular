import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockeDetailsComponent } from './stocke-details/stocke-details.component';
import { StockeListComponent } from './stocke-list/stocke-list.component';
import { CreateStockeComponent } from './create-stocke/create-stocke.component';
import { UpdateStockeComponent } from './update-stocke/update-stocke.component';
import { ProduiteListComponent } from './produite-list/produite-list.component';
import { CreateProduiteComponent } from './create-produite/create-produite.component';
import { UpdateProduiteComponent } from './update-produite/update-produite.component';
import { ProduiteDetailsComponent } from './produite-details/produite-details.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';
import { FournisseureListComponent } from './fournisseure-list/fournisseure-list.component';
import { CreateFournisseureComponent } from './create-fournisseure/create-fournisseure.component';
import { UpdateFournisseureComponent } from './update-fournisseure/update-fournisseure.component';
import { FournisseureDetailsComponent } from './fournisseure-details/fournisseure-details.component';
import { AchateListComponent } from './achate-list/achate-list.component';
import { CreateAchateComponent } from './create-achate/create-achate.component';
import { UpdateAchateComponent } from './update-achate/update-achate.component';
import { AchateDetailsComponent } from './achate-details/achate-details.component';
import { VenteeListComponent } from './ventee-list/ventee-list.component';
import { CreateVenteeComponent } from './create-ventee/create-ventee.component';
import { UpdateVenteeComponent } from './update-ventee/update-ventee.component';
import { VenteeDetailsComponent } from './ventee-details/ventee-details.component';




const routes: Routes = [
  {path: 'stockes', component: StockeListComponent},
  {path: 'create-stocke', component: CreateStockeComponent},
  {path: '', redirectTo: 'stockes', pathMatch: 'full'},
  {path: 'update-stocke/:id', component: UpdateStockeComponent},
  {path: 'stocke-details/:id', component: StockeDetailsComponent},
  {path: 'produites', component: ProduiteListComponent},
  {path: 'create-produite', component: CreateProduiteComponent},
  {path: '', redirectTo: 'produites', pathMatch: 'full'},
  {path: 'update-produite/:id', component: UpdateProduiteComponent},
  {path: 'produite-details/:id', component: ProduiteDetailsComponent},
  {path: 'clientes', component: ClienteListComponent},
  {path: 'create-cliente', component: CreateClienteComponent},
  {path: '', redirectTo: 'clientes', pathMatch: 'full'},
  {path: 'update-cliente/:id', component: UpdateClienteComponent},
  {path: 'cliente-details/:id', component: ClienteDetailsComponent},
  {path: 'fournisseures', component: FournisseureListComponent},
  {path: 'create-fournisseure', component: CreateFournisseureComponent},
  {path: '', redirectTo: 'fournisseures', pathMatch: 'full'},
  {path: 'update-fournisseure/:id', component: UpdateFournisseureComponent},
  {path: 'fournisseure-details/:id', component: FournisseureDetailsComponent},
  {path: 'achates', component: AchateListComponent},
  {path: 'create-achate', component: CreateAchateComponent},
  {path: '', redirectTo: 'achates', pathMatch: 'full'},
  {path: 'update-achate/:id', component: UpdateAchateComponent},
  {path: 'achate-details/:id', component: AchateDetailsComponent},
  {path: 'ventees', component: VenteeListComponent},
  {path: 'create-ventee', component: CreateVenteeComponent},
  {path: '', redirectTo: 'ventees', pathMatch: 'full'},
  {path: 'update-ventee/:id', component: UpdateVenteeComponent},
  {path: 'ventee-details/:id', component: VenteeDetailsComponent},
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
