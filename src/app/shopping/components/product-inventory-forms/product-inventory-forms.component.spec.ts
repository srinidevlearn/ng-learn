import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInventoryFormsComponent } from './product-inventory-forms.component';

describe('ProductInventoryFormsComponent', () => {
  let component: ProductInventoryFormsComponent;
  let fixture: ComponentFixture<ProductInventoryFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInventoryFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInventoryFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
