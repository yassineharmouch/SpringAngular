import { Component, OnInit } from '@angular/core';
import { Achate } from '../module/achate';
import { ActivatedRoute } from '@angular/router';
import { AchateService } from '../service/achate.service';
@Component({
  selector: 'app-achate-details',
  templateUrl: './achate-details.component.html',
  styleUrls: ['./achate-details.component.css']
})
export class AchateDetailsComponent implements OnInit {

 
  id: number
  achate: Achate
  constructor(private route: ActivatedRoute, private achateService:AchateService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.achate = new Achate();
    this.achateService.getAchateById(this.id).subscribe( data => {
      this.achate = data;
    });
  }

}
