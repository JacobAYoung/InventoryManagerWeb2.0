import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductpagemainComponent } from './productpagemain.component';

describe('ProductpagemainComponent', () => {
  let component: ProductpagemainComponent;
  let fixture: ComponentFixture<ProductpagemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductpagemainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpagemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
