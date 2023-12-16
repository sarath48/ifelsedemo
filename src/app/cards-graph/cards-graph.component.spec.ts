import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGraphComponent } from './cards-graph.component';

describe('CardsGraphComponent', () => {
  let component: CardsGraphComponent;
  let fixture: ComponentFixture<CardsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
