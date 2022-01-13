import { Component, OnInit } from '@angular/core';
import { Fournisseure } from '../fournisseure';
import { FournisseureService } from '../fournisseure.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-fournisseure',
  templateUrl: './create-fournisseure.component.html',
  styleUrls: ['./create-fournisseure.component.css']
})
export class CreateFournisseureComponent implements OnInit {

  fournisseure: Fournisseure = new Fournisseure();
  constructor(private fournisseureService: FournisseureService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveFournisseure(){
    this.fournisseureService.createFournisseure(this.fournisseure).subscribe( data =>{
      console.log(data);
      this.goToFournisseureList();
    },
    error => console.log(error));
  }

  goToFournisseureList(){
    this.router.navigate(['/fournisseures']);
  }
  
  onSubmit(){
    console.log(this.fournisseure);
    this.saveFournisseure();
  }

}
