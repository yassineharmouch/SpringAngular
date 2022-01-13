import { Component, OnInit } from '@angular/core';
import { Produite } from '../produite'
import { ProduiteService } from '../produite.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-produite-list',
  templateUrl: './produite-list.component.html',
  styleUrls: ['./produite-list.component.css']
})
export class ProduiteListComponent implements OnInit {

 
  produites: Produite[];

  constructor(private produiteService: ProduiteService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduites();
  }

  private getProduites(){
    this.produiteService.getProduitesList().subscribe(data => {
      this.produites = data;
    });
  }

  produiteDetails(id: number){
    this.router.navigate(['produite-details', id]);
  }

  updateProduite(id: number){
    this.router.navigate(['update-produite', id]);
  }

  deleteProduite(id: number){
    this.produiteService.deleteProduite(id).subscribe( data => {
      console.log(data);
      this.getProduites();
    })
  }

}
