import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CrearSilaboComponent } from './crear-silabo.component';
import { CrearSilaboRoutingModule } from './crear-silabo-routing.module';
import { CommonModule } from '@angular/common'



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CrearSilaboRoutingModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ CrearSilaboComponent ]
})
export class CrearSilaboModule { }


