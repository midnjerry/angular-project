import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { WelcomeCareerPageComponent } from './pages/welcome-career-page/welcome-career-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CareersComponent,
    WelcomeCareerPageComponent
  ],
  imports: [
    CommonModule,
    CareersRoutingModule,
    SharedModule
  ]
})
export class CareersModule { }
