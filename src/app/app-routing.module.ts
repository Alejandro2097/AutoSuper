import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehiculosComponent } from './taller/vehiculos/vehiculos.component';
import { RepuestosComponent } from './taller/repuestos/repuestos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'taller', component:VehiculosComponent},
  {path: 'repuestos', component:RepuestosComponent},
  {path: 'clientes', component:ClientesComponent},
  {path: 'proveedores', component:ProveedoresComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
