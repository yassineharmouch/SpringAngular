import { Component, OnInit } from '@angular/core';
import { ProduiteService } from '../service/produite.service';
import { Produite } from '../module/produite';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-produite',
  templateUrl: './update-produite.component.html',
  styleUrls: ['./update-produite.component.css']
})
export class UpdateProduiteComponent implements OnInit {

  id: number;
  produite: Produite = new Produite();
  constructor(private produiteService: ProduiteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.produiteService.getProduiteById(this.id).subscribe(data => {
      this.produite = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.produiteService.updateProduite(this.id, this.produite).subscribe( data =>{
      this.goToProduiteList();
    }
    , error => console.log(error));
  }

  goToProduiteList(){
    this.router.navigate(['/produites']);
  }

}
