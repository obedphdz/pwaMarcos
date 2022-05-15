import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nombreh:string="";
  indice: number=0;
  miheroe: Heroe={
    nombre:"",
    bio:"",
    img:"",
    aparicion:"",
    casa:""
  };


  prueba() {
    Swal.fire({
         title: 'Heroe no encontrado',
         text: 'Este mensaje se auto destruira en 3 segundos',
         timer: 3000,
         timerProgressBar: true,
         showConfirmButton: false
       }) 
       Swal.update({
           icon: 'error'
        })
  }
  

  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.params.subscribe(params =>{
      this.nombreh=params['nombreh'];
      this.indice=this.heroeService.searchUnHeroe(this.nombreh);
      console.log(this.indice);

      if(this.indice != -1){
        this.miheroe = this.heroeService.getUnHeroe(this.indice);
      }
    });
  }

  ngOnInit(): void {
  }

  
}
