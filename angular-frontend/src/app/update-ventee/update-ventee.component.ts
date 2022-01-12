import { Component, OnInit } from '@angular/core';
import { VenteeService } from '../ventee.service';
import { Ventee } from '../ventee';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-ventee',
  templateUrl: './update-ventee.component.html',
  styleUrls: ['./update-ventee.component.css']
})
export class UpdateVenteeComponent implements OnInit {

  
  id: number;
  ventee: Ventee = new Ventee();
  constructor(private venteeService: VenteeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.venteeService.getVenteeById(this.id).subscribe(data => {
      this.ventee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.venteeService.updateVentee(this.id, this.ventee).subscribe( data =>{
      this.goToVenteeList();
    }
    , error => console.log(error));
  }

  goToVenteeList(){
    this.router.navigate(['/ventees']);
  }

}
