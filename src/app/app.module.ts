import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ProdutoTelaComponent } from './produto-tela/produto-tela.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioComponent,
    ProdutoTelaComponent,
    DashboardComponent,
    CreditCardComponent,
    ProdutoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
