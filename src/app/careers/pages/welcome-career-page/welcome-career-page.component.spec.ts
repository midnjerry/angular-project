import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCareerPageComponent } from './welcome-career-page.component';

describe('WelcomeCareerPageComponent', () => {
  let component: WelcomeCareerPageComponent;
  let fixture: ComponentFixture<WelcomeCareerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeCareerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeCareerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
