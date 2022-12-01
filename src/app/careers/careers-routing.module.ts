import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeCareerPageComponent } from './pages/welcome-career-page/welcome-career-page.component';

const routes: Routes = [{ path: '', component: WelcomeCareerPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersRoutingModule { }
