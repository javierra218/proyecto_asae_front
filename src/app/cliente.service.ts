import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private httHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private urlEndPoint: string = 'http://localhost:5000/api/clientes';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    console.log('listado de clientes desde el servicio');
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }

  create(cliente: Cliente): Observable<Cliente> {
    console.log('creando cliente desde el servicio');
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {
      headers: this.httHeaders,
    });
  }

  updateCliente(id:number): Observable<Cliente>{
    console.log('actualizando cliente desde el servicio');
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httHeaders});
  }

  deleteCliente(id:number): Observable<Cliente>{
    console.log('eliminando cliente desde el servicio');
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httHeaders});
  }

  getClienteById(id:number): Observable<Cliente>{
    console.log('obteniendo cliente por id desde el servicio');
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httHeaders});
  }

}
