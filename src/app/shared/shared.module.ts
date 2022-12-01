import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoPanelComponent } from './components/photo-panel/photo-panel.component';
import { InventoryCardComponent } from './components/inventory-card/inventory-card.component';

@NgModule({
  declarations: [
    PhotoPanelComponent,
    InventoryCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhotoPanelComponent, 
    InventoryCardComponent
  ]
})
export class SharedModule { }
