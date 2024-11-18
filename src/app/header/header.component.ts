import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent{
  nombres: string = "Juan";
  apellidos: string = "Perez";
  disciplina: string = "Soy desarrollador BackEnd especialista en node.js y en Experiencia de usuario";
  descripcion: string = "Estudiante de Ingenieria de sistemas apasionado por el desarrollo BackEnd";


}
