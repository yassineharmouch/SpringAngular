import { Component, OnInit } from '@angular/core';
import { StockeService } from '../stocke.service';
import { Stocke } from '../stocke';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-stocke',
  templateUrl: './update-stocke.component.html',
  styleUrls: ['./update-stocke.component.css']
})
export class UpdateStockeComponent implements OnInit {

 
  id: number;
  stocke: Stocke = new Stocke();
  constructor(private stockeService: StockeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.stockeService.getStockeById(this.id).subscribe(data => {
      this.stocke = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.stockeService.updateStocke(this.id, this.stocke).subscribe( data =>{
      this.goToStockeList();
    }
    , error => console.log(error));
  }

  goToStockeList(){
    this.router.navigate(['/stockes']);
  }

}
