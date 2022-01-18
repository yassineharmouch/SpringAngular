import { Component, OnInit } from '@angular/core';
import { FournisseureService } from '../service/fournisseure.service';
import { Fournisseure } from '../module/fournisseure';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-fournisseure',
  templateUrl: './update-fournisseure.component.html',
  styleUrls: ['./update-fournisseure.component.css']
})
export class UpdateFournisseureComponent implements OnInit {

  id: number;
  fournisseure: Fournisseure = new Fournisseure();
  constructor(private fournisseureService: FournisseureService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.fournisseureService.getFournisseureById(this.id).subscribe(data => {
      this.fournisseure = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.fournisseureService.updateFournisseure(this.id, this.fournisseure).subscribe( data =>{
      this.goToFournisseureList();
    }
    , error => console.log(error));
  }

  goToFournisseureList(){
    this.router.navigate(['/fournisseures']);
  }

}
