import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente'
import { ClienteService } from '../cliente.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  
  clientes: Cliente[];

  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
    this.getClientes();
  }

  private getClientes(){
    this.clienteService.getClientesList().subscribe(data => {
      this.clientes = data;
    });
  }

  clienteDetails(id: number){
    this.router.navigate(['cliente-details', id]);
  }

  updateCliente(id: number){
    this.router.navigate(['update-cliente', id]);
  }

  deleteCliente(id: number){
    this.clienteService.deleteCliente(id).subscribe( data => {
      console.log(data);
      this.getClientes();
    })
  }

}
