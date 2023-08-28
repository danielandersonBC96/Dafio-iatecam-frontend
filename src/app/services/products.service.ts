import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Products } from '../models/products';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Url =  'http://localhost:5000/api/products' 

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getProduct(): Observable<Products[]>{
    
      return this.httpClient.get<Products[]>( this.Url)

  }

  getProductById(id: number): Observable<Products>{

    return this.httpClient.get<Products>( this.Url + '/'+ id).pipe (
      retry(2),
       
  )} 
}
