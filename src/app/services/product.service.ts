import { Injectable } from '@angular/core';
import { Product } from '../products/product.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, shareReplay, tap, map } from 'rxjs/operators';



//@Injectable is used to inject to other services 
//not to inject to other components
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://storerestservice.azurewebsites.net/api/products/';
  products$ : Observable<Product[]>

  constructor(private http : HttpClient ) { 
    this.initProducts();
  }

  initProducts(){
    this.products$ = this.http.get<Product[]>(this.baseUrl);
  }

  
}
