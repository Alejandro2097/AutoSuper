import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CarroService } from './services/carro.service';
import { VehiculosComponent } from './taller/vehiculos/vehiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProveedoresComponent,
    ClientesComponent,
    VehiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CarroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
