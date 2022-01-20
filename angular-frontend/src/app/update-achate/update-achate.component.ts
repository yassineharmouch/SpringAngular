import { Component, OnInit } from '@angular/core';
import { AchateService } from '../service/achate.service';
import { Achate } from '../module/achate';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseureService } from '../service/fournisseure.service';
import { Fournisseure } from '../module/fournisseure';
@Component({
  selector: 'app-update-achate',
  templateUrl: './update-achate.component.html',
  styleUrls: ['./update-achate.component.css']
})
export class UpdateAchateComponent implements OnInit {

 
  id: number;
  achate: Achate = new Achate();

  frs: Fournisseure[] = [];
  constructor(private achateService: AchateService,
    private route: ActivatedRoute,
    private router: Router,private fournisseureService: FournisseureService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getfrs();
    this.achateService.getAchateById(this.id).subscribe(data => {
      this.achate = data;
    }, error => console.log(error));
  }

  getfrs(){
    this.fournisseureService.getFournisseuresList().subscribe(pro => {
      this.frs = pro;
    })
  } 
  onSubmit(){
    this.achateService.updateAchate(this.id, this.achate).subscribe( data =>{
      this.goToAchateList();
    }
    , error => console.log(error));
  }

  goToAchateList(){
    this.router.navigate(['/achates']);
  }
}
