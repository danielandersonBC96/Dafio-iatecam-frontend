import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../models/products';
import { ProductsService } from '../services/products.service';
import { identifierName } from '@angular/compiler';



@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.css']
})
export class ProdutoDetailsComponent  implements OnInit {


  id: any
  produtos: Products[] 


  constructor(private  productSevice : ProductsService) {}
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProduct()
   
    }
    getProduct( ){
      this.productSevice.getProduct().subscribe(
        objeto => this.produtos = objeto
      )
      
      

    
 
    }

  }
