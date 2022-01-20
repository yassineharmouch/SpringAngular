import { Component, OnInit } from '@angular/core';
import { Achate} from '../module/achate';
import { AchateService } from '../service/achate.service';
import { Router } from '@angular/router';
import { FournisseureService } from '../service/fournisseure.service';
import { Fournisseure } from '../module/fournisseure';
@Component({
  selector: 'app-create-achate',
  templateUrl: './create-achate.component.html',
  styleUrls: ['./create-achate.component.css']
})
export class CreateAchateComponent implements OnInit {

 
  achate: Achate = new Achate();

  frs: Fournisseure[] = [];
  constructor(private achateService: AchateService,
    private router: Router,private fournisseureService: FournisseureService) { }

  ngOnInit(): void {
    this.getfrs();
  }

  getfrs(){
    this.fournisseureService.getFournisseuresList().subscribe(pro => {
      this.frs = pro;
    })
  } 

  saveAchate(){
    this.achateService.createAchate(this.achate).subscribe( data =>{
      console.log(data);
      this.goToAchateList();
    },
    error => console.log(error));
  }

  goToAchateList(){
    this.router.navigate(['/achates']);
  }
  
  onSubmit(){
    console.log(this.achate);
    this.saveAchate();
  }

}
