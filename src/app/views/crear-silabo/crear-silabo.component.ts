import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { of } from 'rxjs';

@Component({
  templateUrl: 'crear-silabo.component.html'
})
export class CrearSilaboComponent {
  asignaturas: any = [
  {id:1, nombre: 'Base de Datos, 2019-2020'},
  {id:2, nombre: 'Ingeniería de Software, 2019-2020'},
  {id:3, nombre: 'Procesos, 2019-2020'},    
  {id:4, nombre: 'Tendencias de Programación, 2019-2020'}
]

  constructor(private formBuilder: FormBuilder) {}
    
  asignaturasForm = this.formBuilder.group({
    asignaturas: ['']
  }) 

    submit() {
      alert(JSON.stringify(this.asignaturasForm.value))
    }
  }


