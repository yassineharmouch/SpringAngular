import { Component, OnInit } from '@angular/core';
import { Ventee } from '../ventee';
import { ActivatedRoute } from '@angular/router';
import { VenteeService } from '../ventee.service';
@Component({
  selector: 'app-ventee-details',
  templateUrl: './ventee-details.component.html',
  styleUrls: ['./ventee-details.component.css']
})
export class VenteeDetailsComponent implements OnInit {

  id: number
  ventee: Ventee
  constructor(private route: ActivatedRoute, private venteeService: VenteeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ventee = new Ventee();
    this.venteeService.getVenteeById(this.id).subscribe( data => {
      this.ventee = data;
    });
  }

}
