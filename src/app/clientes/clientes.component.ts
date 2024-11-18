import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((clientes) => {
      console.log('Listado de clientes:', clientes);
      this.clientes = clientes;
    });
  }
}
