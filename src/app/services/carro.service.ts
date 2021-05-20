import { Injectable } from "@angular/core";
import { Carro } from "../model/Carro";

@Injectable()
export class CarroService{
    public carros :Array<Carro>;
    constructor(){

        this.carros= [
            new Carro('KLG', 'pepe')
        ];
        console.log(this.carros);
    }
    getCarro():Array<Carro>{
        return this.carros;
    }
}   