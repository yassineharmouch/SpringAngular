import { Component, OnInit } from '@angular/core';
import { Fournisseure } from '../module/fournisseure'
import { FournisseureService } from '../service/fournisseure.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-fournisseure-list',
  templateUrl: './fournisseure-list.component.html',
  styleUrls: ['./fournisseure-list.component.css']
})
export class FournisseureListComponent implements OnInit {

 
  
  fournisseures: Fournisseure[];

  constructor(private fournisseureService: FournisseureService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFournisseures();
  }

  private getFournisseures(){
    this.fournisseureService.getFournisseuresList().subscribe(data => {
      this.fournisseures = data;
    });
  }

  fournisseureDetails(id: number){
    this.router.navigate(['fournisseure-details', id]);
  }

  updateFournisseure(id: number){
    this.router.navigate(['update-fournisseure', id]);
  }

  deleteFournisseure(id: number){
    this.fournisseureService.deleteFournisseure(id).subscribe( data => {
      console.log(data);
      this.getFournisseures();
    })
  }
}
