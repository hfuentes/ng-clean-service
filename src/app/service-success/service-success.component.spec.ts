import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSuccessComponent } from './service-success.component';

describe('ServiceSuccessComponent', () => {
  let component: ServiceSuccessComponent;
  let fixture: ComponentFixture<ServiceSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
