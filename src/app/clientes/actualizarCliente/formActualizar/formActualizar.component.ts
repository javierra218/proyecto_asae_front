import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Cliente } from '../../cliente';
import { ClienteService } from '../../../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formActualizar',
  templateUrl: './formActualizar.component.html',
  styleUrls: ['./formActualizar.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule, SweetAlert2Module],
})
export class FormActualizarComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public titulo: String = 'Actualizar cliente';

  constructor(private clienteService:ClienteService,private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const clienteId = this.route.snapshot.paramMap.get('id');
    if (clienteId) {
      this.clienteService.getClienteById(+clienteId).subscribe(
        cliente => {
          this.cliente = cliente;
        }
      );
    }
  }


  public actualizarCliente(): void {
    console.log("Actualizando cliente", this.cliente);
    this.clienteService.updateCliente(this.cliente).subscribe(
      response => {
        // Log para indicar que la actualización fue exitosa
        console.log("Cliente actualizado exitosamente");
        
        // Redirigir a la lista de clientes después de la actualización
        this.router.navigate(['/clientes/listarClientes']);
        
        // Mostrar un mensaje de éxito usando SweetAlert2
        Swal.fire('Cliente actualizado', `Cliente ${response.nombre} actualizado exitosamente`, 'success');
      },
      error => {
        // Log para errores en la consola
        console.error("Error al actualizar el cliente:", error);
        
        // Mostrar un mensaje de error con SweetAlert2
        Swal.fire('Error', 'No se pudo actualizar el cliente. Intente nuevamente', 'error');
      }
    );
  }
  

}
