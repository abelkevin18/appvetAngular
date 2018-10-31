import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../model/cliente';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styles: []
})
export class ListCustomerComponent implements OnInit {
  clientes: Cliente [];
  constructor(private router: Router, private service: CustomerService) { }

  ngOnInit() {
    this.service.getAllClientes().subscribe(
      data => (this.clientes = data)
    );
  }

  // funcion click() para eliminar
  deleteCliente(cliente: Cliente): void{
    // uso del swal
    swal({
      title: 'Confirmar eliminación de registro',
      text: `¿Seguro desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if(result.value){
        this.service.deleteCliente(cliente.idcliente).subscribe(data => {
          this.clientes = this.clientes.filter(c => c !== cliente);
        });

        swal('Eliminado!', 'Se ha eliminado el cliente.', 'success');
      }
    });
  }

}
