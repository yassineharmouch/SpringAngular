import { Component, OnInit } from '@angular/core';
import { Fournisseure } from '../module/fournisseure';
import { ActivatedRoute } from '@angular/router';
import { FournisseureService } from '../service/fournisseure.service';
@Component({
  selector: 'app-fournisseure-details',
  templateUrl: './fournisseure-details.component.html',
  styleUrls: ['./fournisseure-details.component.css']
})
export class FournisseureDetailsComponent implements OnInit {

  
  id: number
  fournisseure: Fournisseure
  constructor(private route: ActivatedRoute, private fournisseureService:FournisseureService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.fournisseure = new Fournisseure();
    this.fournisseureService.getFournisseureById(this.id).subscribe( data => {
      this.fournisseure = data;
    });
  }

}
