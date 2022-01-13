import { Component, OnInit } from '@angular/core';
import { Produite } from '../produite';
import { ProduiteService } from '../produite.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-produite',
  templateUrl: './create-produite.component.html',
  styleUrls: ['./create-produite.component.css']
})
export class CreateProduiteComponent implements OnInit {

  
  produite: Produite = new Produite();
  constructor(private produiteService: ProduiteService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveProduite(){
    this.produiteService.createProduite(this.produite).subscribe( data =>{
      console.log(data);
      this.goToProduiteList();
    },
    error => console.log(error));
  }

  goToProduiteList(){
    this.router.navigate(['/produites']);
  }
  
  onSubmit(){
    console.log(this.produite);
    this.saveProduite();
  }

}
