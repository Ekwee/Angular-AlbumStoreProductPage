import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTracklistringComponent } from './product-tracklistring.component';

describe('ProductTracklistringComponent', () => {
  let component: ProductTracklistringComponent;
  let fixture: ComponentFixture<ProductTracklistringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTracklistringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTracklistringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
