import { Component, OnInit } from '@angular/core';
import { Stocke } from '../module/stocke';
import { StockeService } from '../service/stocke.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-stocke',
  templateUrl: './create-stocke.component.html',
  styleUrls: ['./create-stocke.component.css']
})
export class CreateStockeComponent implements OnInit {

  stocke: Stocke = new Stocke();
  constructor(private stockeService: StockeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveStocke(){
    this.stockeService.createStocke(this.stocke).subscribe( data =>{
      console.log(data);
      this.goToStockeList();
    },
    error => console.log(error));
  }

  goToStockeList(){
    this.router.navigate(['/stockes']);
  }
  
  onSubmit(){
    console.log(this.stocke);
    this.saveStocke();
  }
}
