import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';
import { ProdutoTelaComponent } from './produto-tela/produto-tela.component';



const routes: Routes = [

  {path:"produto" , component: ProdutoTelaComponent},
  {path:"formulario", component: FormularioComponent},
  {path:"", component:  LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
