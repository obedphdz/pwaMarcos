import { Component, OnInit } from '@angular/core';
import { Villano } from '../villano';
import { VillanoService } from '../villano.service';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {

  constructor(public miservicio: VillanoService) { }

  misVillanos: Villano[]=[];

  ngOnInit(): void {
    console.log("ngOnInit de Heroes");
    this.misVillanos = this.miservicio.getVillano();
    console.log(this.misVillanos);
  }

}
