import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSummryComponent } from './shopping-cart-summry.component';

describe('ShoppingCartSummryComponent', () => {
  let component: ShoppingCartSummryComponent;
  let fixture: ComponentFixture<ShoppingCartSummryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartSummryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartSummryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
