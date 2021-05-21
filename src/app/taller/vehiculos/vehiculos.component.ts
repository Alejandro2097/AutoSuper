import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/model/Carro';
import { CarroService } from '../../services/carro.service';




@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  public Carros:Array<Carro>
  public carro: Carro;
  public carroView: Carro;
  constructor(private _carroService:CarroService){
      this.Carros = [];
      this.carro= {
        placa: '',
        marca: ''
      }
      this.carroView = this.carro;
  }
  onSubmit(form:any) {
    console.log(this._carroService.getCarro());  
     this._carroService.addCarro(form);
  }
  ngOnInit(): void {
    this.Carros = this._carroService.getCarro();
    console.log(this.Carros);
    
  }
  addCarro():void{

  }
  deleteCarro():void{

  }
  editCarro():void{

  }
  updateCarro():void{

  }

}
