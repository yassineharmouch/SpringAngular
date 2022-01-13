import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit {

  id: number;
  cliente: Cliente = new Cliente();
  constructor(private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.clienteService.getClienteById(this.id).subscribe(data => {
      this.cliente = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.clienteService.updateCliente(this.id, this.cliente).subscribe( data =>{
      this.goToClienteList();
    }
    , error => console.log(error));
  }

  goToClienteList(){
    this.router.navigate(['/clientes']);
  }
}
