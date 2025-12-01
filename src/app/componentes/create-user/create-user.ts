import { Component } from '@angular/core';
import { Service01 } from '../../servicios/service01';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.html',
  styleUrl: './create-user.css',
})
export class CreateUser {

  newUser = {
    name: '',
    email: ''
  };

  constructor(private service: Service01) { }

  public createUser(): void {

    if (!this.newUser.name || !this.newUser.email) {
      alert('Por favor, llena todos los campos.');
      return;
    }

    this.service.crearUsuario(this.newUser).subscribe({
      next: (response) => {
        alert('Usuario creado con éxito');
        console.log('Respuesta del servidor:', response);
        this.newUser = { name: '', email: '' };
      },
      error: (err) => {
        alert('Error al crear usuario');
        console.error('Error al crear usuario:', err);
      }
    });

  }

}
