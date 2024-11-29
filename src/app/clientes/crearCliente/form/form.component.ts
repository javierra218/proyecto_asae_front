import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente';
import { ClienteService } from '../../../cliente.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [FormsModule,SweetAlert2Module,CommonModule],
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public titulo: string = 'Crear Cliente';

  public listarErrores: any = {};   

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {}

  public crearCliente() {
    console.log("Creando cliente");
    this.clienteService.create(this.cliente).subscribe(
        {
            next: (response) => {
                console.log("Cliente creado exitosamente");
                console.log(this.cliente);
                this.router.navigate(['clientes/listarClientes']);
                Swal.fire('Nuevo cliente', `Cliente ${response.nombre} creado con éxito!`, 'success');
            },
            error: (err) => {
                console.error('Error al crear cliente:', err.message);
                this.listarErrores=err.error;
            }
        }
    );
}

}
