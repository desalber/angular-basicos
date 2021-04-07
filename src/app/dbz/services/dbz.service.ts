import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje []= [
        {
          nombre: 'Goku',
          poder: 15001
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ]

    get personajes(): Personaje[]{
        //return this._personajes;  de esta forma lo mandamos por refencia no mandamos un nuevo objeto
        return [...this._personajes];  // las [] indican que es un arreglo los ... para indicar que sea un arreglo nuevo con los mismos datos
    }


    constructor(){
        console.log('Servicio Inicializado');
    }


    agregarPersonaje (personaje:Personaje){
        this._personajes.push(personaje);
    }

}