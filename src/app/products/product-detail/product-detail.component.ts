import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnChanges{
  @Input() product: Product | undefined
  @Output() bought = new EventEmitter();

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined

  // ngAfterViewInit(): void {
  //   if (this.productDetail) {
  //     console.log(this.productDetail.name)
  //   }
  // }

  // ngOnInit(): void {
  //   console.log(`Name to ${this.name} w w ngOnInit`)
  // }
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product']
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue
      const newValue = product.currentValue
      console.log(`Produkt zmieniony z ${oldValue} na ${newValue}`)
    }
  }
  // constructor(){
  //   console.log(`Name to ${this.name} w konstruktorze`)
  // }

  buy() {
    this.bought.emit();
  // }
  // get productName(): string {
  //   console.log(` Pobierz ${this.productName}`)
  //   return this.productName;
  // }
  
 
}
}
