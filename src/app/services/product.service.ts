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
    this.products$ = this.
                        http
                        .get<Product[]>(this.baseUrl)
                        .pipe(
                          // delay(1500)

                          //tap just taps to the data stream
                          // its a cheap way to debug 
                          tap(console.log),
                           //same as the above and they are literally the same 
                           tap(data => console.log(data),




                          //makes a table on the console log 
                          tap(console.table)

                         
                          )
                          );
                        

  }

  
  
}
