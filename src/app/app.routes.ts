import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/crearCliente/form/form.component';

export const routes: Routes = [
    {path: '', redirectTo: '/clientes/listarClientes', pathMatch: 'full'},
    {path: 'clientes/listarClientes', component: ClientesComponent},
    {path: 'clientes/crearClientes', component: FormComponent },
];
