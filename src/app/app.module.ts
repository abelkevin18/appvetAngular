import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ListCustomerComponent } from './components/list-customer/list-customer.component';

// importamos para usar las rutas
import { routes } from './app.routes'; // para el archivo que creamos
import { RouterModule } from '@angular/router'; // propio de angular

// Importar ReactiveFormsModule para los formularios
import { ReactiveFormsModule } from '@angular/forms';

// No olvidar el Httpclient
import { HttpClientModule } from '@angular/common/http';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';



@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( routes, { useHash: true } ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
