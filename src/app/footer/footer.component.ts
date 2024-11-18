import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true 
})
export class FooterComponent {

  public proyecto: any = { anio: '2024', nombreProyecto: 'Proyecto de Clase' };
  public tecnologia: any = { leyenda: 'WebApp desarrollada con ', tec1: 'Angular', tec2: 'Spring-Spring Boot' };
  public autor: string = 'Desarrollado por ...';

}
