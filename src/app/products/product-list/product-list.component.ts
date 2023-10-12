import { Component , OnInit, OnDestroy} from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {
  today = new Date()
  selectedProduct: Product | undefined
  // products: Product[] =   []
  products$: Observable<Product[]> | undefined;
  private productStub: Subscription | undefined;

  onBuy(){
    window.alert(`Zakupiłeś ${this.selectedProduct?.name}!`)
  }

  trackByProducts(index: number, name:string): number{
    return index
  }
  // products = {
  //   'Webcam': 100,
  //   'Microphone': 200,
  //   'Wireless keyboard': 85
  // };
  constructor(private productService: ProductsService) {
  
  }

  private getProducts() {
    // this.productStub = this.productService.getProducts().subscribe(products => {
    //   this.products = products;
    // })
    this.products$ = this.productService.getProducts();
  }
  ngOnInit(): void {
    // this.products = this.productService.getProducts();
    this.getProducts();
    }

  ngOnDestroy(): void {
    this.productStub?.unsubscribe();
  }

  }


