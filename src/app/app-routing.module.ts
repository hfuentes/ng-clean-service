import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceSuccessComponent } from './service-success/service-success.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'services', component: ServiceListComponent },
  { path: 'details/:id', component: ServiceDetailsComponent },
  { path: 'success', component: ServiceSuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
