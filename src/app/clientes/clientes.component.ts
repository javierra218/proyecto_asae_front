import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterModule } from '@angular/router'; 
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule,RouterLink],
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService,private router:Router) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((clientes) => {
      console.log('Listado de clientes:', clientes);
      this.clientes = clientes;
    });
  }

  eliminarCliente(id: number): void {
    Swal.fire({
      title: '¿Desea eliminar al cliente?',
      text: 'La eliminación no se puede revertir',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.deleteCliente(id).subscribe(() => {
          // Filtrar el cliente eliminado de la lista
          this.clientes = this.clientes.filter(cliente => cliente.id !== id);
          
          // Mostrar mensaje de éxito
          Swal.fire(
            'Eliminado',
            'El cliente ha sido eliminado exitosamente',
            'success'
          );
        });
      } else {
        console.log("Eliminación cancelada");
      }
    });
  }

  editarCliente(id: number): void {
    this.router.navigate(['/clientes/actualizar', id]);
  }
  
}
