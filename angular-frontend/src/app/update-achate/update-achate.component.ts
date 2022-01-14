import { Component, OnInit } from '@angular/core';
import { AchateService } from '../achate.service';
import { Achate } from '../achate';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-achate',
  templateUrl: './update-achate.component.html',
  styleUrls: ['./update-achate.component.css']
})
export class UpdateAchateComponent implements OnInit {

 
  id: number;
  achate: Achate = new Achate();
  constructor(private achateService: AchateService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.achateService.getAchateById(this.id).subscribe(data => {
      this.achate = data;
    }, error => console.log(error));
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
