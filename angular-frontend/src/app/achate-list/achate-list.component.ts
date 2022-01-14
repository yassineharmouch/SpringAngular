import { Component, OnInit } from '@angular/core';
import { Achate } from '../achate'
import { AchateService } from '../achate.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-achate-list',
  templateUrl: './achate-list.component.html',
  styleUrls: ['./achate-list.component.css']
})
export class AchateListComponent implements OnInit {

    
  achates: Achate[];

  constructor(private achateService: AchateService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAchates();
  }

  private getAchates(){
    this.achateService.getAchatesList().subscribe(data => {
      this.achates = data;
    });
  }

  AchateDetails(id: number){
    this.router.navigate(['achate-details', id]);
  }

  updateAchate(id: number){
    this.router.navigate(['update-achate', id]);
  }

  deleteAchate(id: number){
    this.achateService.deleteAchate(id).subscribe( data => {
      console.log(data);
      this.getAchates();
    })
  }
}
