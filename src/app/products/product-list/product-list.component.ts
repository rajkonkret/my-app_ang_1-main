import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  today = new Date()
  selectedProduct: Product | undefined
  products: Product[] = [
    {
      name:'Webcam',
      price: 100
    },
    {
     name: 'ipad',
     price: 3000
    },
    {
      name: 'samsung',
      price: 6565
    }
  ]
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
  


}
