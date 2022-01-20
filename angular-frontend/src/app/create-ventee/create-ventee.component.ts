import { Component, OnInit } from '@angular/core';
import { Ventee} from '../module/ventee';
import { VenteeService } from '../service/ventee.service';
import { Router } from '@angular/router';
import { StockeService } from '../service/stocke.service';
import { Stocke } from '../module/stocke';
import { Produite } from '../module/produite';
import { ProduiteService } from '../service/produite.service';
import { Cliente } from '../module/cliente';
import { ClienteService } from '../service/cliente.service';
@Component({
  selector: 'app-create-ventee',
  templateUrl: './create-ventee.component.html',
  styleUrls: ['./create-ventee.component.css']
})
export class CreateVenteeComponent implements OnInit {

 
 
  ventee: Ventee = new Ventee();
  cls: Cliente[] = [];
  prods: Produite[] =[];

  constructor(private venteeService: VenteeService,
    private router: Router,private clientservice : ClienteService,private ProduiteService : ProduiteService) { }

  ngOnInit(): void {
    this.getClients();
    this.getprods();
  }

  getprods(){
    this.ProduiteService.getProduitesList().subscribe(pro => {
      this.prods = pro;
    })
  } 

  getClients(){
    this.clientservice.getClientesList().subscribe(stck => {
      this.cls = stck;
    })
  } 
  saveVentee(){
    
    console.log(this.ventee);
    this.venteeService.createVentee(this.ventee).subscribe( data =>{
      this.goToVenteeList();
    },
    error => console.log(error));
  }

  goToVenteeList(){
    this.router.navigate(['/ventees']);
  }


}
