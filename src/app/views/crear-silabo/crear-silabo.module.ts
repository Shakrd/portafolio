import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CrearSilaboComponent } from './crear-silabo.component';
import { CrearSilaboRoutingModule } from './crear-silabo-routing.module';



@NgModule({
  imports: [
    FormsModule,
    CrearSilaboRoutingModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ CrearSilaboComponent ]
})
export class CrearSilaboModule { }


