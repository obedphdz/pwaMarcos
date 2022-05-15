import { Injectable } from '@angular/core';
import { VILLANO } from './misvillanos';
import { Villano } from './villano';

@Injectable({
  providedIn: 'root'
})
export class VillanoService {

  constructor() { }

  private villano:Villano[]=VILLANO;

  getVillano(): Villano[] {
    return this.villano;
  }

  getUnVillano(posicion:number):Villano{
    return this.villano[posicion];
  }

}
