import { Injectable } from "@angular/core";
import { Carro } from "../model/Carro";

@Injectable()
export class CarroService{
    public carros :Array<Carro>;
    public carro: Carro;
    public carroView:Carro; 
    constructor(){

        this.carros= [
            new Carro('KLG', 'pepe')
        ];
        this.carro= {
            placa: '',
            marca: ''
          }
        this.carroView = this.carro;
        console.log(this.carros);
    }
    getCarro():Array<Carro>{
        return this.carros;
    }
    addCarro(carrito: Array<Carro>):void{

        console.log(carrito);
        this.carroView = Object.assign({}, this.carro);
        this.carros.push(this.carroView);
    }
}   