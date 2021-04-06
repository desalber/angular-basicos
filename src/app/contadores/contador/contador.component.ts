import {Component} from '@angular/core'


@Component({
    selector: 'app-contador',
    template:    `
        <h1>Hola mundo</h1>

        <h1>{{1 + 1}}</h1>
        
        <h1>{{titulo}}</h1>
        
        
        <button (click)="numero=numero+1;">+1</button>
        
        <h1>{{numero}}</h1>
        
        <button (click)="numero=numero-1;">-1</button>
        
        <h1>FUNCIONES</h1>
        
        <h2>La base es <strong>{{base}}</strong></h2>
        
        <button (click)="acumulador(base);">{{base}} Funcion</button>
        <button (click)="acumulador(base*(-1));">{{base}} Funcion</button>
`
})

export class ContadorComponent{
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumulador(valor: number){
    this.numero+=valor;
  }
}