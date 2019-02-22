import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoptionsdialogComponent } from './productoptionsdialog.component';

describe('ProductoptionsdialogComponent', () => {
  let component: ProductoptionsdialogComponent;
  let fixture: ComponentFixture<ProductoptionsdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoptionsdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoptionsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
