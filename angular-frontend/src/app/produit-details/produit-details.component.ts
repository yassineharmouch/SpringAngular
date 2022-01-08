import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {

  id: number
  produit: Produit
  constructor(private route: ActivatedRoute, private produitService: ProduitService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.produit = new Produit();
    this.produitService.getProduitById(this.id).subscribe( data => {
      this.produit = data;
    });
  }

}
