import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

    heroes: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'thor', 'capitan America'];
    heroeBorrado: string ='';


    borrarHeroe():void{
      this.heroeBorrado = this.heroes.shift() || ''; //si es undefine regresa vacio
    }

}
