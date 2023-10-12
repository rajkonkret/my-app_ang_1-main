import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private products = [
    {
      name: "Webcam",
      price: 100
    },
    {
      name: "Mikrofon",
      price: 200
    },
    {
      name: 'Klawiatura bezprzewodowa',
      price: 85
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products)
  }
}
