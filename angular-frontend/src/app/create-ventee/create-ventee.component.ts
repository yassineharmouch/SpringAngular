import { Component, OnInit } from '@angular/core';
import { Ventee} from '../module/ventee';
import { VenteeService } from '../service/ventee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-ventee',
  templateUrl: './create-ventee.component.html',
  styleUrls: ['./create-ventee.component.css']
})
export class CreateVenteeComponent implements OnInit {

 
 
  ventee: Ventee = new Ventee();
  constructor(private venteeService: VenteeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveVentee(){
    this.venteeService.createVentee(this.ventee).subscribe( data =>{
      console.log(data);
      this.goToVenteeList();
    },
    error => console.log(error));
  }

  goToVenteeList(){
    this.router.navigate(['/ventees']);
  }
  
  onSubmit(){
    console.log(this.ventee);
    this.saveVentee();
  }


}
