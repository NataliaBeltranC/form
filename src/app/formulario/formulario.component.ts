import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  contactoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    telefono: new FormControl(null, [Validators.required, Validators.minLength(7), Validators.maxLength(10)]),
  })


  updateUser(event:any) {
    event.preventDefault();
    //this.nombre.setValue('Cambie el value del input')
  }

  enviarFormulario() {
    console.log(this.contactoForm.get('nombre'), 'formualrio contacto')
  }

}
