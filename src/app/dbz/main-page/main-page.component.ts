import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{


  nuevo: Personaje = {
    nombre: 'Maestro tortuga',
    poder: 500
  }

  
  

  agregarNUevoPersonaje(argumento:Personaje){
    //this.personajes.push(argumento);
  }

  constructor(){

  }
  

}
