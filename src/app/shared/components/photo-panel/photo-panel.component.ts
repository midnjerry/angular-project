import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-panel',
  templateUrl: './photo-panel.component.html',
  styleUrls: ['./photo-panel.component.css']
})
export class PhotoPanelComponent {

@Input()
imageUrl: string = 'assets/no-image.png';

}
