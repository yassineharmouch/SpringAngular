import { Component, OnInit } from '@angular/core';
import { Ventee } from '../ventee'
import { VenteeService } from '../ventee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-ventee-list',
  templateUrl: './ventee-list.component.html',
  styleUrls: ['./ventee-list.component.css']
})
export class VenteeListComponent implements OnInit {

    
  ventees: Ventee[];

  constructor(private venteeService: VenteeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getVentees();
  }

  private getVentees(){
    this.venteeService.getVenteesList().subscribe(data => {
      this.ventees = data;
    });
  }

  VenteeDetails(id: number){
    this.router.navigate(['ventee-details', id]);
  }

  updateVentee(id: number){
    this.router.navigate(['update-ventee', id]);
  }

  deleteVentee(id: number){
    this.venteeService.deleteVentee(id).subscribe( data => {
      console.log(data);
      this.getVentees();
    })
  }

}
