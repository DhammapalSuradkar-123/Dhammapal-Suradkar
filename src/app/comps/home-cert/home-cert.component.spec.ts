import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCertComponent } from './home-cert.component';

describe('HomeCertComponent', () => {
  let component: HomeCertComponent;
  let fixture: ComponentFixture<HomeCertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
