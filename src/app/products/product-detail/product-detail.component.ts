import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  // @Input() 
  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService : ProductService,
    private router: Router 
    ) { }
    
    delete(){

      if(window.confirm('Are you sure ?')){
        this
        .productService
        .deleteProduct(this.product.id)
        .subscribe(
          () => {
            console.log('Product deleted! ');
             //this will remove the delete item from the cache 
            this.productService.initProducts();
            //this will take us back to the products after deltion 
            this.router.navigateByUrl('/products');
           
          },
            error => console.log('Could not delete product!' + error)
        )
    }
      }
     

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    // alert(id);

    this
      .productService
      .products$
      .pipe(
        map(products => products.find(product => product.id == id))
      )
      .subscribe(
        result => this.product = result
      )
  }

}
