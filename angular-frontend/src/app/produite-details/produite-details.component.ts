import { Component, OnInit } from '@angular/core';
import { Produite } from '../produite';
import { ActivatedRoute } from '@angular/router';
import { ProduiteService } from '../produite.service';
@Component({
  selector: 'app-produite-details',
  templateUrl: './produite-details.component.html',
  styleUrls: ['./produite-details.component.css']
})
export class ProduiteDetailsComponent implements OnInit {

 
  id: number
  produite: Produite
  constructor(private route: ActivatedRoute, private produiteService: ProduiteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.produite = new Produite();
    this.produiteService.getProduiteById(this.id).subscribe( data => {
      this.produite = data;
    });
  }


}
