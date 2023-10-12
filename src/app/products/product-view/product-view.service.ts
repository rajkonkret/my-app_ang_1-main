import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Observable, of, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductViewService {
  private product: Product | undefined;

  constructor(private productService: ProductsService) { }

  getProduct(id: number): Observable<Product> | undefined {
    // const products = this.productService.getProducts();
    // if (!this.product) {
    //     this.product = products[id];
    // }
    // return this.product;
    return this.productService.getProducts().pipe(
      switchMap(products => {
        if (!this.product){
          this.product = products[id]
        }
        return of(this.product)
      })

    )
  }
}
