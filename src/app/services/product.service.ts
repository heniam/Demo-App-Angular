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

  private baseUrl = 'http://storerestservice.azurewebsites.net/api/products/';
  products$ : Observable<Product[]>

  constructor(private http : HttpClient ) { 
    this.initProducts();
  }

  insertProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, newProduct);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + id);           
  }
  
  initProducts(){
    let url:string = this.baseUrl + `?$orderby=ModifiedDate%20desc`;

    this.products$ = this.
                        http
                        .get<Product[]>(url)
                        .pipe(
                          delay(1500),
                          tap(data => console.log(data)),
                          shareReplay(),
                          catchError(this.handleError)
                          
                          );
                        

  }

  private handleError(error: HttpErrorResponse) {
    // in a real world app, you may send the error to the server using some remote logging infrastructure
    // instead of just logging it to the console
    let errorMsg: string;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMsg = 'An error occurred:' + error.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMsg = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    console.error(errorMsg);
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  
  
}
