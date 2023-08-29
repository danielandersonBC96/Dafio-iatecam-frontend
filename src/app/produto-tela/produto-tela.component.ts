import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Products } from '../models/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-produto-tela',
  templateUrl: './produto-tela.component.html',
  styleUrls: ['./produto-tela.component.css']
})
export class ProdutoTelaComponent  implements OnInit{

  product = {} as Products
  produtos: Products[

    
  ]

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
