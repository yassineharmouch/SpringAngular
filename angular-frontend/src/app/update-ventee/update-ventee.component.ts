import { Component, OnInit } from '@angular/core';
import { VenteeService } from '../service/ventee.service';
import { Ventee } from '../module/ventee';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { ProduiteService } from '../service/produite.service';
import { Cliente } from '../module/cliente';
import { Produite } from '../module/produite';
@Component({
  selector: 'app-update-ventee',
  templateUrl: './update-ventee.component.html',
  styleUrls: ['./update-ventee.component.css']
})
export class UpdateVenteeComponent implements OnInit {

 
  id: number;
  ventee: Ventee = new Ventee();
  cls: Cliente[] = [];
  prods: Produite[] =[];


  constructor(private venteeService: VenteeService,
    private route: ActivatedRoute,
    private router: Router,private clientservice : ClienteService,private ProduiteService : ProduiteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getprods();
    this.getClients();
    this.venteeService.getVenteeById(this.id).subscribe(data => {
      this.ventee = data;
    }, error => console.log(error));
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
  onSubmit(){
    this.venteeService.updateVentee(this.id, this.ventee).subscribe( data =>{
      this.goToVenteeList();
    }
    , error => console.log(error));
  }

  goToVenteeList(){
    this.router.navigate(['/ventees']);
  }
}
