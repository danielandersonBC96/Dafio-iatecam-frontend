import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';
import { ProdutoTelaComponent } from './produto-tela/produto-tela.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';



const routes: Routes = [

  {path:"" , component: ProdutoTelaComponent},
  {path:"formulario", component: FormularioComponent},
  {path:"login", component:  LoginComponent},
  { path:"dashboard", component: DashboardComponent},
  { path:'creditCard', component: CreditCardComponent},
  { path:"Details", component: ProdutoDetailsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
