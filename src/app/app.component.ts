
import { Component, OnInit , Input} from '@angular/core';
import { Products } from './models/products';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app'; 

  product = {} as Products 
  produtos:Products[]

  constructor(private  productSevice : ProductsService) {}
  



  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  this. getProduct()
    }

 getProduct( ){

  return this.productSevice.getProduct().subscribe ((produtos:Products[]) => {

      this.produtos = produtos
  })}
 }


