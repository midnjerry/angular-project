import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoPanelComponent } from './components/photo-panel/photo-panel.component';

@NgModule({
  declarations: [
    PhotoPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhotoPanelComponent
  ]
})
export class SharedModule { }
