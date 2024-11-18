import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente';
import { ClienteService } from '../../../cliente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public titulo: string = "Crear Cliente";

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
  }

  public crearCliente(): void {
    console.log('creando cliente');
    this.clienteService.create(this.cliente).subscribe(
      response => {
        console.log('cliente creado exitosamente');
        console.log(this.cliente);
        this.router.navigate(['/clientes/listarClientes']);
      }
    );
  }
}
