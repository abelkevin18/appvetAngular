import { Routes } from '@angular/router';

import { ListCustomerComponent } from './components/list-customer/list-customer.component';

export const routes: Routes = [
    { path: 'list-customer', component: ListCustomerComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list-customer' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-customer' }
];
