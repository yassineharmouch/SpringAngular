import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit'
import { ProduitService } from '../produit.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  produits: Produit[];

  constructor(private produitService: ProduitService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduits();
  }

  private getProduits(){
    this.produitService.getProduitsList().subscribe(data => {
      this.produits = data;
    });
  }

  produitDetails(id: number){
    this.router.navigate(['produit-details', id]);
  }

  updateProduit(id: number){
    this.router.navigate(['update-produit', id]);
  }

  deleteProduit(id: number){
    this.produitService.deleteProduit(id).subscribe( data => {
      console.log(data);
      this.getProduits();
    })
  }

}
