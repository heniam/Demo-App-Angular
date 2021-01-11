import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

title : string = 'Products';
products : Product[];
products$: Observable<Product[]>;
selectedProduct: Product;


onSelect(product: Product){
  this.selectedProduct = product;
}

  constructor( private productService: ProductService) { 
    
  }

  ngOnInit(): void {

    

    //  this
    //     .productService
    //     .products$
    //     .subscribe(
    //       results => this.products = results
    //     )

      //Or we can use this instead using a async pipe 
      
    this.products$ = this.productService.products$;
    
   


  }

}
