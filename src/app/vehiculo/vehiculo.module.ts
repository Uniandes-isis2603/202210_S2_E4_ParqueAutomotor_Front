import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { VehiculoDetailComponent } from './vehiculo-detail/vehiculo-detail.component';
import { RouterModule } from '@angular/router';
import { ReservaRoutingModule } from '../reserva/reserva-routing.routing';
import { VehiculoRoutingModule } from './vehiculo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    VehiculoRoutingModule
  ],
  exports: [VehiculoListComponent],
  declarations: [VehiculoListComponent, VehiculoDetailComponent],
})
export class VehiculoModule { }
