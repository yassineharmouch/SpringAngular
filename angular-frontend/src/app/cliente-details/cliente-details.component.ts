import { Component, OnInit } from '@angular/core';
import { Cliente } from '../module/cliente';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {

 
  id: number
  cliente: Cliente
  constructor(private route: ActivatedRoute, private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cliente = new Cliente();
    this.clienteService.getClienteById(this.id).subscribe( data => {
      this.cliente = data;
    });
  }


}
