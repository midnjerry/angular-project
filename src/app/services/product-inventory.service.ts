import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ProductItem } from '../models/product-item.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductInventoryService {
  BACKEND_URL = 'http://localhost:8080/api/products';
  constructor(private http: HttpClient) { }

  // Get all the products
  // GET  api/products
  public getAllDummyProducts(): Observable<ProductItem[]> {
    return of([{
      id: 1,
      name: "Rusted Wedding Ring",
      description: "This was the ring for the ill-fated union between John and Mary Anne",
      price: 1000,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Zombie_costume_portrait.jpg/1693px-Zombie_costume_portrait.jpg'
    }, {
      id: 2,
      name: "John Doe's Leg",
      description: "The leg that Mary Anne's dog bit off",
      price: 499.99,
      imageUrl: 'https://www.shutterstock.com/image-photo/bleeding-human-leg-isolated-on-260nw-1846543648.jpg'
    }, {
      id: 3,
      name: "Lotion",
      description: "Lotion that represent last ditch effort to keep skin looking smooth",
      price: 10.99,
      imageUrl: 'http://cdn.shopify.com/s/files/1/0729/8765/products/ZombieParadise_1_grande.png'
    }, {
      id: 4,
      name: "Pig Brains",
      description: "When you can't get human brains, this will have to do.",
      price: 49.99,
      imageUrl: 'https://i.ytimg.com/vi/w8guxLk6VTA/maxresdefault.jpg'
    }]).pipe(delay(500));
  }

  public getAllProducts(): Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>(this.BACKEND_URL);
  }
}
