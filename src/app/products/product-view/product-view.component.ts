import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ProductViewService } from './product-view.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit{
  @Input() id = -1
  private productStub = new Subject<void>();

  constructor(private productViewService: ProductViewService) {}
  name = '';
  ngOnInit(): void {
    const product = this.productViewService.getProduct(this.id);
    // if (product) {
    //   this.name = ''
    // }
    this.getProduct();
    
  }

  private getProduct() {
    // this.productViewService.getProduct(this.id)?.subscribe(
    //   product => {
    //     if (product) {
    //       this.name = product.name
    //     }
    this.productViewService.getProduct(this.id)?.pipe( 
      takeUntil(this.productStub)).subscribe(
        product => {
          if (product) {
            this.name = product.name
          }
        }
      )
      
    
  }
  ngOnDestroy(): void{
    this.productStub.next()
    this.productStub.complete()
  }

}
