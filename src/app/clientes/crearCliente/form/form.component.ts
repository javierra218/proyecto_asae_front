import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente';
import { ClienteService } from '../../../cliente.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [FormsModule,SweetAlert2Module],
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public titulo: string = 'Crear Cliente';

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {}

  public crearCliente(): void {
    console.log('creando cliente');
    this.clienteService.create(this.cliente).subscribe((response) => {
      console.log('cliente creado exitosamente');
      console.log(this.cliente);
      this.router.navigate(['/clientes/listarClientes']);
      Swal.fire('Nuevo Cliente', `Cliente ${this.cliente.nombre} creado con éxito`, 'success');
    });
  }
}
