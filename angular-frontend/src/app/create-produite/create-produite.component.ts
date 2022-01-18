import { Component, OnInit } from '@angular/core';
import { Produite } from '../module/produite';
import { ProduiteService } from '../service/produite.service';
import { Router } from '@angular/router';
import { Stocke } from '../module/stocke';
import { StockeService } from '../service/stocke.service';
@Component({
  selector: 'app-create-produite',
  templateUrl: './create-produite.component.html',
  styleUrls: ['./create-produite.component.css']
})
export class CreateProduiteComponent implements OnInit {

  
  produite = new Produite();
  stkes: Stocke[] = [];
  constructor(private produiteService: ProduiteService,
    private router: Router, private StockeService : StockeService) { }

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks(){
    this.StockeService.getStockesList().subscribe(stck => {
      this.stkes = stck;
    })
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
    console.log(this.produite.stocks);
    //this.saveProduite();
  }

}
