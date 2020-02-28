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

correquisitosAsignatura: any = [
  {id:1, nombre: 'Base de Datos, 2019-2020', codigo: 'abc1234'},
  {id:2, nombre: 'Ingeniería de Software, 2019-2020', codigo: 'qwer789'}
 
]

prerrequisitosAsignatura: any = [
  {id:1, nombre: 'Base de Datos, 2019-2020', codigo: 'abc1234'},
  {id:2, nombre: 'Ingeniería de Software, 2019-2020', codigo: 'qwer789'},
  {id:3, nombre: 'Procesos, 2019-2020', codigo: 'pjyge8925'},    
  {id:4, nombre: 'Tendencias de Programación, 2019-2020', codigo: 'azxc463'}
]
  constructor(private formBuilder: FormBuilder) {}
    
  asignaturasForm = this.formBuilder.group({
    asignaturas: ['']
  }) 

  correquisitosForm = this.formBuilder.group({
    correquisitosAsignatura: ['']
  })

  prerrequisitosForm = this.formBuilder.group({
    correquisitosAsignatura: ['']
  })

    submit() {
      alert(JSON.stringify(this.asignaturasForm.value))
    }
  }


