import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductItem } from 'src/app/models/product-item.interface';
import { ProductInventoryService } from 'src/app/services/product-inventory.service';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.css']
})
export class ProductsListPageComponent implements OnInit {
  inventory: ProductItem[] = [];
  subscription: Subscription | undefined;
  
  // private productInventory: ProductInventoryService;
  // constructor(productInventoryService: ProductInventoryService) {
  //     this.productInventory = productInventoryService;
  //  }

  // commented code above does same as code below
  constructor(private productInventory: ProductInventoryService) {}
  
  ngOnInit(): void {
    this.subscription = this.productInventory.getAllDummyProducts().subscribe(results => {
      this.inventory = results;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }    
  }
}
