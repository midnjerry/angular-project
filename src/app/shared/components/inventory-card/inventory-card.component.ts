import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inventory-card',
  templateUrl: './inventory-card.component.html',
  styleUrls: ['./inventory-card.component.css']
})
export class InventoryCardComponent {

@Input()
imageUrl: string = 'assets/no-image.png';
@Input()
name: string = 'Product Name';
  @Input()
  price!: number;
}
