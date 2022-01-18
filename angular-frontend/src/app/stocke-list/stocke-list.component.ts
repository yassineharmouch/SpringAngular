import { Component, OnInit } from '@angular/core';
import { Stocke } from '../module/stocke'
import { StockeService } from '../service/stocke.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-stocke-list',
  templateUrl: './stocke-list.component.html',
  styleUrls: ['./stocke-list.component.css']
})
export class StockeListComponent implements OnInit {

 
  stockes: Stocke[];

  constructor(private stockeService: StockeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStockes();
  }

  private getStockes(){
    this.stockeService.getStockesList().subscribe(data => {
      this.stockes = data;
    });
  }

  stockeDetails(id: number){
    this.router.navigate(['stocke-details', id]);
  }

  updateStocke(id: number){
    this.router.navigate(['update-stocke', id]);
  }

  deleteStocke(id: number){
    this.stockeService.deleteStocke(id).subscribe( data => {
      console.log(data);
      this.getStockes();
    })
  }

}
