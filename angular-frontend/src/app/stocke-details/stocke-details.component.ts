import { Component, OnInit } from '@angular/core';
import { Stocke } from '../stocke';
import { ActivatedRoute } from '@angular/router';
import { StockeService } from '../stocke.service';
@Component({
  selector: 'app-stocke-details',
  templateUrl: './stocke-details.component.html',
  styleUrls: ['./stocke-details.component.css']
})
export class StockeDetailsComponent implements OnInit {

  id: number
  stocke: Stocke
  constructor(private route: ActivatedRoute, private stockeService: StockeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.stocke = new Stocke();
    this.stockeService.getStockeById(this.id).subscribe( data => {
      this.stocke = data;
    });
  }

}
